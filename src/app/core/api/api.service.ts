import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  constructor(private http: HttpClient) {}

  public getData(path: string) {
    return this.http.get(
      this.createCompleteURLPath(path, environment.webAPIUrl)
    );
  }

  public create(path: string, body) {
    return this.http.post(
      this.createCompleteURLPath(path, environment.webAPIUrl),
      body,
      this.generateHeaders()
    );
  }

  public update(path: string, body) {
    return this.http.put(
      this.createCompleteURLPath(path, environment.webAPIUrl),
      body,
      this.generateHeaders()
    );
  }

  public delete(path: string) {
    return this.http.delete(
      this.createCompleteURLPath(path, environment.webAPIUrl)
    );
  }

  private createCompleteURLPath(path: string, envAddress: string) {
    return `${envAddress}/${path}`;
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}
