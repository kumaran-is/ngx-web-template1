import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadStrategyService implements PreloadingStrategy {
  constructor() {}

  preload(route: Route, load: Function): Observable<any> {
    if (route.data && route.data['preload']) {
      console.log('Preload Path: ' + route.path);
      if (route.data['delay']) {
        console.log('delay:' + route.data['delay']);
        return timer(5000).pipe(mergeMap(() => load()));
      } else {
        return load();
      }
    } else {
      return of(null);
    }
  }
}
