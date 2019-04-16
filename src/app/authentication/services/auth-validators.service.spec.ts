import { TestBed } from '@angular/core/testing';

import { AuthValidatorsService } from './auth-validators.service';

describe('AuthValidatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthValidatorsService = TestBed.get(AuthValidatorsService);
    expect(service).toBeTruthy();
  });
});
