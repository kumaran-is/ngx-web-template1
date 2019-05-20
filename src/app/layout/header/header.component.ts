import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import {
  Component,
  HostListener,
  Input,
  NgZone,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() isLoading: boolean;
  shrinkToolbar = false;
  private readonly SHRINK_TOP_SCROLL_POSITION = 15;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.scrollDispatcher
        .scrolled()
        .pipe(map((event: CdkScrollable) => this.getScrollPosition(event)))
        .subscribe(scrollTop =>
          this.ngZone.run(
            () =>
              (this.shrinkToolbar =
                scrollTop > this.SHRINK_TOP_SCROLL_POSITION ? true : false)
          )
        )
    );
  }

  getScrollPosition(event: CdkScrollable) {
    if (event) {
      return event.getElementRef().nativeElement.scrollTop;
    } else {
      return window.scrollY;
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
