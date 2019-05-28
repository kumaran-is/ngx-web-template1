import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent {
  @Input() public isUserAuthenticated: boolean;
  @Input() public userName: string;
  @Output() public signout = new EventEmitter<any>();
  @Output() public openLoginDialog = new EventEmitter<any>();

  public doSignout() {
    this.signout.emit();
  }

  public doOpenLoginDialog() {
    this.openLoginDialog.emit();
  }
}
