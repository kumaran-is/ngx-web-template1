import { Injectable } from '@angular/core';
import { FirestoreModule } from '@core/firestore/firestore.module';

@Injectable({ providedIn: FirestoreModule })
export class FirestoreAPIService {
  constructor() {}
}
