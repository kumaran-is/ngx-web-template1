import { TestBed } from '@angular/core/testing';

import { OnDemandPreloadStrategyService } from './on-demand-preload-strategy.service';

describe('OnDemandPreloadStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnDemandPreloadStrategyService = TestBed.get(OnDemandPreloadStrategyService);
    expect(service).toBeTruthy();
  });
});
