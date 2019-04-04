import { TestBed } from '@angular/core/testing';
import { FirestoreAPIService } from './firestore-api.service';

describe('FirestoreAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreAPIService = TestBed.get(FirestoreAPIService);
    expect(service).toBeTruthy();
  });
});
