import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(private http: HttpClient) {}

  public get(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.http.get(
      this.createCompleteURLPath(environment.webAPIUrl, path),
      { params }
    );
  }

  public post(path: string, body): Observable<any> {
    return this.http.post(
      this.createCompleteURLPath(environment.webAPIUrl, path),
      body,
      this.generateHeaders()
    );
  }

  public put(path: string, body): Observable<any> {
    return this.http.put(
      this.createCompleteURLPath(environment.webAPIUrl, path),
      body,
      this.generateHeaders()
    );
  }

  public delete(path: string): Observable<any> {
    return this.http.delete(
      this.createCompleteURLPath(environment.webAPIUrl, path)
    );
  }

  private createCompleteURLPath(envAPIUrl: string, path: string) {
    return `${envAPIUrl}/${path}`;
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}
