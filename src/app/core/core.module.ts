import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ApiPrefixInterceptor } from '@core/interceptors/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from '@core/interceptors/error-handler.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule,
  ],
  providers: [
    // order for interceptors matters
    ApiPrefixInterceptor,
    ErrorHandlerInterceptor,
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule i.e the AppModule
  and makes all the services(providers) under CoreMode as application-wide
  singleton service */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
