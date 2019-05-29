import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FirestoreAPIService {
  constructor(private angularFirestore: AngularFirestore) {}

  /**
   * @param  path 'collection'
   * @param  optional query paramter 'query'
   * @returns Observable<any> Returns an Observable of data as a array of JSON objects with snapshot metadata
   * Returns a collection of documents as JSON objects with snapshot metadata for given path and query parameters
   */
  public collection$(path: string, query?: any) {
    return this.angularFirestore
      .collection<any[]>(path, query)
      .snapshotChanges()
      .pipe(
        map(response => {
          // response is a array of documents, using array map function to extract individual documents
          return response.map(doc => {
            const data: any = doc.payload.doc.data();
            const id = doc.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  /**
   * @param  path 'collection'
   * @param  optional query paramter 'query'
   * @returns Observable<any> Returns an Observable of data as a array of JSON objects with snapshot metadata
   * Returns a collection of documents as JSON objects without snapshot metadata for given path and query parameters
   */
  /* public collection$(path: string, query?: any) {
    return this.angularFirestore.collection<any[]>(path, query).valueChanges();
  }
   */

  /**
   * @param path 'docs/docID'
   * @returns Observable<any> Returns an Observable of data as a JSON object
   * with metadata (the under lying DatabaseReference and snapshot key):
   * Returns a document as JSON object with snapshot metadata for given doc path
   */
  public docWithMetaData$(path: string): Observable<any> {
    return this.angularFirestore
      .doc<any>(path)
      .snapshotChanges()
      .pipe(
        map(doc => {
          console.log('API service response $$$$$$$ ', doc);
          console.log('API service response 22222 ', {
            id: doc.payload.id,
            ...doc.payload.data()
          });
          return { id: doc.payload.id, ...doc.payload.data() };
        })
      );
  }

  /**
   * @param path 'docs/docID'
   * @returns Observable<any> Returns an Observable of data as a JSON object without snapshot metadata
   * Returns a document as JSON object without snapshot metadata for given doc path
   */
  public doc$(path: string): Observable<any> {
    console.log('path >>>>>>>  ', path);
    return this.angularFirestore
      .doc<any>(path)
      .valueChanges()
      .pipe(
        map(doc => {
          console.log('API service response  ', doc);
          return doc;
        })
      );
  }

  public recordExists$(path: string): Observable<boolean> {
    return this.angularFirestore
      .doc<any>(path)
      .valueChanges()
      .pipe(
        first(),
        map(Boolean)
      );
  }

  /**
   * @param  path 'collection' or 'collection/docID'
   * @param  data new data
   * Creates or updates data on a collection or document.
   */
  public update(path: string, data: any): Promise<any> {
    console.log('Data is 2222>>>>', data);
    const segments = path.split('/').filter(v => v);
    if (segments.length % 2) {
      // Odd is always a collection
      return this.angularFirestore.collection(path).add(data);
    } else {
      // Even is always document
      // return this.angularFirestore.doc(path).update(data);
      return this.angularFirestore
        .doc(path)
        .set(this.mapToObject(data), { merge: true });
    }
  }

  /**
   * @param  path to document
   * Deletes document from Firestore
   */
  public delete(path: string) {
    return this.angularFirestore.doc(path).delete();
  }

  /**
   * @param  instance of class model
   * @returns JavaScript object compatibility with firestore
   * Deletes document from Firestore
   */
  private mapToObject(object: any): any {
    return JSON.parse(JSON.stringify(object));
  }
}
