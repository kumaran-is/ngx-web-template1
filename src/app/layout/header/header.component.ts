import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, Inject, Input, NgZone, OnInit } from '@angular/core';
import { StopSubscribe } from '@api/stop-subscribe';
import { IDialog } from '@app/auth/models/dialog.interface';
import { AuthService } from '@app/auth/services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends StopSubscribe implements OnInit {
  @Input() isLoading: boolean;
  shrinkToolbar = false;
  private readonly SHRINK_TOP_SCROLL_POSITION = 15;

  constructor(
    public authService: AuthService,
    // service is injected via interface to overcome cyclic dependency
    @Inject('IDialog') private dialogService: IDialog,
    private scrollDispatcher: ScrollDispatcher,
    private ngZone: NgZone
  ) {
    super();
  }

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

  openLoginDialog() {
    this.dialogService.popupDialog('login');
  }

  doSignout() {
    this.authService
      .signOut()
      .then(() => {
        console.log('successfull logout');
      })
      .catch(error => {
        console.error('Error while signout', error);
      });
  }
}
