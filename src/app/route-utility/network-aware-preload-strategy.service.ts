import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
export declare var navigator;

@Injectable({
  providedIn: 'root'
})
export class NetworkAwarePreloadStrategyService implements PreloadingStrategy {
  constructor() {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      console.log('Preload Path: ' + route.path);
      if (this.hasGoodConnection()) {
        if (route.data['delay']) {
          console.log('delay:' + route.data['delay']);
          return timer(5000).pipe(mergeMap(() => load()));
        } else {
          return load();
        }
      } else {
        return EMPTY;
      }
    } else {
      return EMPTY;
    }
  }

  private hasGoodConnection(): boolean {
    const conn = navigator.connection;
    if (conn) {
      if (conn.saveData) {
        return false; // save data mode is enabled, so dont preload
      }
      const avoidTheseConnections = ['slow-2g', '2g' /*, '3g', '4g'*/];
      const effectiveType = conn.effectiveType || '';
      console.log('connection type >>>', effectiveType);
      if (avoidTheseConnections.includes(effectiveType)) {
        return false;
      }
    }
    return true;
  }
}
