import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreConstants } from '@core/core.constants';
import { RetryService } from '@core/error/retry.service';
import { environment } from '@env/environment';
import { Observable, pipe } from 'rxjs';
import { retryWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(
    private http: HttpClient,
    private coreConstants: CoreConstants,
    private retryService: RetryService
  ) {}

  public get(path: string, params?: any): Observable<any> {
    return this.http.get(
      this.createCompleteURLPath(path),
      this.generateQueryString(params)
    );
  }

  public getWithRetry(
    path: string,
    params?: any,
    isRetry?: boolean,
    isRetryType?: string
  ): Observable<any> {
    return this.http
      .get(this.createCompleteURLPath(path), this.generateQueryString(params))
      .pipe(this.applyRetry(isRetry, isRetryType));
  }

  public patch(path: string, body: any): Observable<any> {
    return this.http.patch(
      this.createCompleteURLPath(path),
      body,
      this.generateHeaders()
    );
  }

  public post(path: string, body: any): Observable<any> {
    return this.http.post(
      this.createCompleteURLPath(path),
      body,
      this.generateHeaders()
    );
  }

  public put(path: string, body: any): Observable<any> {
    return this.http.put(
      this.createCompleteURLPath(path),
      body,
      this.generateHeaders()
    );
  }

  public delete(path: string): Observable<any> {
    return this.http.delete(this.createCompleteURLPath(path));
  }

  private createCompleteURLPath(path: string) {
    return `${environment.webAPIUrl}/${path}`;
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders(this.coreConstants.HTTP_HEADERS)
    };
  }

  private generateQueryString(params?: any) {
    let queryString;
    if (params) {
      queryString = {
        params: new HttpParams()
      };
      for (const param in params) {
        if (params.hasOwnProperty(param)) {
          queryString.params.set(param, params[param]);
        }
      }
    }
    return queryString;
  }

  private applyRetry(isRetry?: boolean, isRetryType?: string) {
    const operators = [];
    if (isRetry) {
      if (isRetryType === 'increment') {
        operators.push(
          retryWhen(this.retryService.retryWithIncrementalDelay())
        );
      } else {
        operators.push(retryWhen(this.retryService.retryWithDelay()));
      }
    }
    return pipe.apply(this, operators);
  }
}
