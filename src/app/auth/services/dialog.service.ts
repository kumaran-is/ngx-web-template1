import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { AcknowledgementDialogComponent } from '@app/auth/acknowledgement/acknowledgement-dialog.component';
import { ForgotPasswordDialogComponent } from '@app/auth/forgot-password/forgot-password-dialog.component';
import { LoginDialogComponent } from '@app/auth/login/login-dialog.component';
import { AuthService } from '@app/auth/services/auth.service';
import { SignupComponent } from '@app/auth/signup/signup.component';
import { takeWhile } from 'rxjs/operators';
import { IDialog } from './dialog.interface';

@Injectable({
  providedIn: 'root'
})
export class DialogService implements IDialog, OnDestroy {
  public currentDialogRef: MatDialogRef<any> = null;
  private subscriptions = true;

  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private authService: AuthService
  ) {}

  public popupDialog(dialogComponent: string) {
    if (dialogComponent === 'login') {
      this.currentDialogRef = this.matDialog.open(
        LoginDialogComponent,
        this.setDialogConfiguration()
      );
    } else if (dialogComponent === 'signup') {
      this.currentDialogRef = this.matDialog.open(
        SignupComponent,
        this.setDialogConfiguration()
      );
    } else if (dialogComponent === 'forgotpassword') {
      this.currentDialogRef = this.matDialog.open(
        ForgotPasswordDialogComponent,
        this.setDialogConfiguration()
      );
    } else if (dialogComponent === 'acknowlegment') {
      this.currentDialogRef = this.matDialog.open(
        AcknowledgementDialogComponent,
        this.setDialogConfiguration()
      );
    }

    this.currentDialogRef
      .afterClosed()
      .pipe(takeWhile(() => this.subscriptions))
      .subscribe(result => {
        console.log('Dialog was closed');
        if (result !== 'close') {
          console.log('<<<<email is >>>', result);
          // TODO: do we need this
        }
      });
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    if (!!this.subscriptions) {
      this.subscriptions = false;
    }
  }

  private setDialogConfiguration(): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '650px';
    dialogConfig.width = '400px';
    dialogConfig.hasBackdrop = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Sign In'
    };
    return dialogConfig;
  }

  private isUserAuthenticate(credentials: any): void {
    // TODO:
    // Make a call to firestore service and authenticate the user
    if (
      credentials.email === 'admin@g.com' &&
      credentials.password === 'admin'
    ) {
      this.router.navigate(['/checkout']);
    } else {
      // TODO:
      // Display the friendly message on the dialog box , avoid javascript alert
      alert('Invalid credentials');
    }
  }
}
