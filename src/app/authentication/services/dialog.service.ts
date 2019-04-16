import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { AcknowledgementDialogComponent } from '@app/authentication/acknowledgement/acknowledgement-dialog.component';
import { ForgotPasswordDialogComponent } from '@app/authentication/forgot-password/forgot-password-dialog.component';
import { LoginDialogComponent } from '@app/authentication/login/login-dialog.component';
import { AuthenticationService } from '@app/authentication/services/authentication.service';
import { SignupComponent } from '@app/authentication/signup/signup.component';
import { IDialog } from './dialog.interface';

@Injectable({
  providedIn: 'root'
})
export class DialogService implements IDialog {
  public currentDialogRef: MatDialogRef<any> = null;

  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private authenticationService: AuthenticationService
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

    this.currentDialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed');
      if (result !== 'close') {
        console.log('<<<<email is >>>', result);
        // TODO: do we need this
      }
    });
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
