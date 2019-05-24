import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, shareReplay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // private apiAppConfigURL = `api/config`;

  constructor(private http: HttpClient) {}

  public loadAppConfig(): Observable<any[]> {
    /* In real world you will get it from configuration file*/
    const envConfigFilePath = environment.configFilePath;
    return (
      this.http
        .get<any>(envConfigFilePath)
        // return this.http.get<any>(this.apiAppConfigURL)
        .pipe(
          map((response: any) => {
            if (Object.keys(response).length === 0) {
              // if configuration is empty, throw error
              throw new Error('Application Configuration is empty');
            } else {
              return response as any;
            }
          }),
          /*
          shareReplay operator to build a caching behavior for the configuration
          prevent duplicate XHR request when we call loadConfigurations again
          */
          shareReplay(1),
          catchError(this.handleAndThrowRemoteError.bind(this)),
          finalize(() => {
            console.log('Clean up your resource here ');
          })
        )
    );
  }

  private handleAndThrowRemoteError(
    error: Error | HttpErrorResponse | any
  ): Observable<any> {
    let errorMessage = 'An error occurred while loading application config: ';
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error('Error caught while making remote Service call', error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage += `An error occurred at client: ${error.error.message}`;
    } else {
      // Server-Side Error: The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if (error.error && error.error.status) {
        errorMessage += `Backend service returns error - ${
          error.error.status
        }: ${error.error.message}`;
      } else {
        errorMessage += `Backend service returns error - ${error.status}: ${
          error.message
        }`;
      }
    }
    return throwError(errorMessage);
  }
}
