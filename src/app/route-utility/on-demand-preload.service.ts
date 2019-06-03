import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class OnDemandPreloadOptions {
  constructor(public routePath: string, public preload: boolean = true) {}
}

@Injectable({
  providedIn: 'root'
})
export class OnDemandPreloadService {
  constructor() {}
  subject = new Subject<OnDemandPreloadOptions>();
  state$ = this.subject.asObservable();

  startPreload(routePath: string) {
    const message = new OnDemandPreloadOptions(routePath, true);
    this.subject.next(message);
  }
}
