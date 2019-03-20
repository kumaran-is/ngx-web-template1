import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FirestoreModule } from '@core/firestore/firestore.module';
import { ErrorHandlerInterceptor } from '@core/interceptors/error-handler.interceptor';
import { ProfilerInterceptor } from '@core/interceptors/profiler.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [CommonModule, HttpClientModule, FirestoreModule, NgxSpinnerModule],
  exports: [HttpClientModule],
  providers: [
    // order for interceptors matters
    ErrorHandlerInterceptor,
    ProfilerInterceptor
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule i.e the AppModule
  and makes all the services(providers) under CoreMode as application-wide
  singleton service */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import CoreModule only in AppModule'
      );
    }
  }
}
