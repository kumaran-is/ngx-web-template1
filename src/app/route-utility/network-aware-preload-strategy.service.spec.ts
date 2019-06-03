import { TestBed } from '@angular/core/testing';

import { NetworkAwarePreloadStrategyService } from './network-aware-preload-strategy.service';

describe('NetworkAwarePreloadStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworkAwarePreloadStrategyService = TestBed.get(NetworkAwarePreloadStrategyService);
    expect(service).toBeTruthy();
  });
});
