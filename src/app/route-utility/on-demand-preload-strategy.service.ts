import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import {
  OnDemandPreloadOptions,
  OnDemandPreloadService
} from '@app/route-utility/on-demand-preload.service';
import { EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
  deps: [OnDemandPreloadService]
})
export class OnDemandPreloadStrategyService implements PreloadingStrategy {
  private preloadOnDemand$: Observable<OnDemandPreloadOptions>;

  constructor(private preloadOnDemandService: OnDemandPreloadService) {
    this.preloadOnDemand$ = this.preloadOnDemandService.state$;
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.preloadOnDemand$.pipe(
      mergeMap(preloadOptions => {
        console.log('OnDemandPreloadStrategyService route is >>>', route);
        const shouldPreload = this.preloadCheck(route, preloadOptions);
        console.log(
          'OnDemandPreloadStrategyService shouldPreload is >>>',
          shouldPreload
        );
        return shouldPreload ? load() : EMPTY;
      })
    );
  }

  private preloadCheck(route: Route, preloadOptions: OnDemandPreloadOptions) {
    return (
      route.data &&
      route.data['preload'] &&
      [route.path, '*'].includes(preloadOptions.routePath) &&
      preloadOptions.preload
    );
  }
}
