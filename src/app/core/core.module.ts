import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { APIServicesModule } from '@app/api-services/api-services.module';
import { ErrorHandlerModule } from '@app/error-handler/error-handler.module';
import { LoggerModule } from '@app/logger/logger.module';
import { RootStoreModule } from '@app/root-store';
import {
  AppInitStoreFacade,
  initApplication
} from '@app/root-store/app-init/app-init-store.facade';
import { DialogService } from '@auth/services/dialog.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RootStoreModule,
    APIServicesModule,
    ErrorHandlerModule,
    LoggerModule
  ],
  exports: [HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApplication,
      deps: [AppInitStoreFacade],
      multi: true
    },
    {
      provide: 'IDialog',
      useClass: DialogService
    }
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
