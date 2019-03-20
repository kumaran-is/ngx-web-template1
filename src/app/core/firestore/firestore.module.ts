import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '@env/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firestore, 'ngrx-web-starter1'),
    // AngularFirestoreModule.enablePersistence(), // Enable offline support
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  declarations: []
})
export class FirestoreModule {}
