import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  constructor() {}

  public handleErrorAndReturnEmptyObservable(
    error: Error | HttpErrorResponse | any
  ): Observable<any> {
    this.parseAndLogError(error);
    return EMPTY;
  }

  public handleAndThrowRemoteError(
    error: Error | HttpErrorResponse | any
  ): Observable<any> {
    return throwError(this.parseAndLogError(error));
  }

  public handleStorageError(error: any): Observable<any> {
    this.parseAndLogError(error);
    /* create an Observable that emits no items but terminates normal,
    this will "bubble"" up to subscriber, since empty no Next() is invoked,
    just invokes only finally method i.e. complete */
    return EMPTY;
  }

  /*public handleSocialError(error: any, socialAppName: string): void {
    this.utilService.showBasicAlert(
      `Your device does not support or have ${socialAppName}. Please try other options`,
      `No ${socialAppName} Support`
    );
    console.error(
      `Error caught while invoking Social Service ${socialAppName},
    continuing`,
      error
    );
  } */

  private parseAndLogError(error: Error | HttpErrorResponse | any): any {
    let errorMessage = 'An error occurred: ';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      if (!navigator.onLine) {
        // Handle offline error
        errorMessage += `No Internet Connection`;
      } else {
        // Handle other client-side or network errors.
        errorMessage += `An error occurred at client: ${error.error.message}`;
      }
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
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(errorMessage, error);
    return errorMessage;
  }
}
