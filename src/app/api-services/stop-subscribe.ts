import { HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class StopSubscribe implements OnDestroy {
  subscriptions: Subscription = new Subscription();

  constructor() {}

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
