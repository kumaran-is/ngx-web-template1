import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IDialog } from '@app/auth/models/dialog.interface';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent {
  @Output() public signout = new EventEmitter<any>();
  @Output() public openLoginDialog = new EventEmitter<any>();

  constructor(
    public authService: AuthService,
    private router: Router,
    // service is injected via interface to overcome cyclic dependency
    @Inject('IDialog') private dialogService: IDialog
  ) {}

  public doOpenLoginDialog() {
    this.dialogService.popupDialog('login');
  }

  doSignout() {
    this.authService
      .signOut()
      .then(() => {
        console.log('successfull logout');
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.error('Error while signout', error);
      });
  }
}
