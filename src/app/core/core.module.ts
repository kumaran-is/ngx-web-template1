import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { APIServicesModule } from '@app/api-services/api-services.module';
import { ErrorHandlerModule } from '@app/error-handler/error-handler.module';
import { LoggerModule } from '@app/logger/logger.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    APIServicesModule,
    ErrorHandlerModule,
    LoggerModule
  ],
  exports: [HttpClientModule],
  providers: []
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
