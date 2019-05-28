import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { DialogService } from '@app/auth/services/dialog.service';
import { HomeModule } from '@app/home/home.module';
import { RootStoreModule } from '@app/root-store';
import {
  AppInitStoreFacade,
  initApplication
} from '@app/root-store/app-init/app-init-store.facade';
import { CoreModule } from '@core/core.module';
import { LayoutModule } from '@layout/layout.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    RootStoreModule,
    LayoutModule,
    HomeModule,
    AppRoutingModule
  ],
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 4));
  }
}
