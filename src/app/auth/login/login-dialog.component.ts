import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MatIconRegistry,
  MAT_DIALOG_DATA
} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthConstants } from '@auth/auth.constants';
import { Credential } from '@auth/models/credential.model';
import { IDialog } from '@auth/models/dialog.interface';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  public loginForm: FormGroup;
  public hide = true;
  public dialogTitle: string;
  public loginError: any;
  // @HostBinding('@moveInLeft')
  // someBaseClass = '';

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private router: Router,
    @Inject('IDialog') private dialogService: IDialog,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private authConstants: AuthConstants
  ) {
    this.dialogTitle = data.title;
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg')
    );
    iconRegistry.addSvgIcon(
      'google',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/google.svg')
    );
  }

  public ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.authConstants.EMAIL_REGEXP)
        ]
      ],
      password: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  public get email() {
    return this.loginForm.get('email');
  }

  public get password() {
    return this.loginForm.get('password');
  }

  public getEmailControlErrorMessage() {
    return this.email.hasError('required')
      ? 'Enter your Email'
      : this.email.hasError('pattern')
      ? 'Not a valid Email'
      : '';
  }

  public getPasswordControlErrorMessage() {
    return this.password.hasError('required') ? 'Enter your Password' : '';
  }

  public doLoginWithEmail() {
    // stop here, don't allow to submit the form  if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      const credential: Credential = new Credential();
      credential.email = this.email.value;
      credential.password = this.password.value;
      this.authService
        .loginWithEmail(credential)
        .then(response => {
          console.log('successfull login', response);
          this.dialogRef.close();
          this.authService.navigateToRedirectUrlAfterAuth();
        })
        .catch(error => {
          this.loginError = error.message;
          console.error('Error while login with Email', error);
        });
    }
  }

  public doLoginWithOAuthProvider(oAuthProvider: string) {
    this.authService
      .loginWithOAuthProvider(oAuthProvider)
      .then(response => {
        console.log(`successfull login using $oAuthProvider `, response);
        this.dialogRef.close(this.loginForm.value);
        this.authService.navigateToRedirectUrlAfterAuth();
      })
      .catch(error => {
        this.loginError = error.message;
        console.error(
          `Error while login using oAuthProvider Gmail $oAuthProvider`,
          error
        );
      });
  }

  public closeDialog() {
    this.dialogRef.close('close');
  }

  public openSignupDialog() {
    this.closeDialog();
    this.dialogService.popupDialog('signup');
  }

  public openForgotPasswordDialog() {
    this.closeDialog();
    this.dialogService.popupDialog('forgotpassword');
  }
}
