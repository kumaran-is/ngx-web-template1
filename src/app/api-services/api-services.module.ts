import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { APIRequestTimerInterceptor } from '@app/api-services/api-request-timer.interceptor';
import { environment } from '@env/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firestore, 'ngx-web-starter'),
    // AngularFirestoreModule.enablePersistence(), // Enable offline support
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    // order for interceptors matters
    APIRequestTimerInterceptor
  ]
})
export class APIServicesModule {}
