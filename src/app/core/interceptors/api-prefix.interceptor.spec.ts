import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { ApiPrefixInterceptor } from './api-prefix.interceptor';

describe('ApiPrefixInterceptor', () => {
  const http: HttpClient;
  const httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: ApiPrefixInterceptor,
        multi: true
      }]
    });
  });

  beforeEach(inject([
    HttpClient,
    HttpTestingController
  ], (httpClient: HttpClient,
      httpTestingController: HttpTestingController) => {

    http = httpClient;
    httpMock = httpTestingController;
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should prepend environment.webAPIUrl to the request url', () => {
    // Act
    http.get('/toto').subscribe();

    // Assert
    httpMock.expectOne({ url: environment.webAPIUrl + '/toto' });
  });

  it('should not prepend environment.webAPIUrl to request url', () => {
    // Act
    http.get('hTtPs://domain.com/toto').subscribe();

    // Assert
    httpMock.expectOne({ url: 'hTtPs://domain.com/toto' });
  });
});
