import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  constructor(private http: HttpClient) {}

  public getData(route: string) {
    return this.http.get(
      this.createCompleteRoute(route, environment.webAPIUrl)
    );
  }

  public create(route: string, body) {
    return this.http.post(
      this.createCompleteRoute(route, environment.webAPIUrl),
      body,
      this.generateHeaders()
    );
  }

  public update(route: string, body) {
    return this.http.put(
      this.createCompleteRoute(route, environment.webAPIUrl),
      body,
      this.generateHeaders()
    );
  }

  public delete(route: string) {
    return this.http.delete(
      this.createCompleteRoute(route, environment.webAPIUrl)
    );
  }

  private createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}/${route}`;
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}
