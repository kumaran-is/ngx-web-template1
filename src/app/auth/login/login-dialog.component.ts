import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MatIconRegistry,
  MAT_DIALOG_DATA
} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthConstants } from '@app/auth/auth.constants';
import { Credential } from '@app/auth/models/credential.model';
import { AuthService } from '@app/auth/services/auth.service';
import { IDialog } from '@app/auth/services/dialog.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  public signinForm: FormGroup;
  public hide = true;
  public dialogTitle: string;
  public signinError: any;
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
    this.signinForm = this.formBuilder.group({
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
    return this.signinForm.get('email');
  }

  public get password() {
    return this.signinForm.get('password');
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

  public doSigninWithEmail() {
    // stop here, don't allow to submit the form  if form is invalid
    if (this.signinForm.invalid) {
      return;
    } else {
      const credential: Credential = new Credential();
      credential.email = this.email.value;
      credential.password = this.password.value;
      this.authService
        .signInWithEmail(credential)
        .then(response => {
          console.log('successfull login', response);
          this.dialogRef.close();
          this.authService.navigateToRedirectUrlAfterAuth();
        })
        .catch(error => {
          this.signinError = error.message;
          console.error('Error while signin with Email', error);
        });
    }
  }

  public doSigninWithOAuthProvider(oAuthProvider: string) {
    this.authService
      .signInWithOAuthProvider(oAuthProvider)
      .then(response => {
        console.log(`successfull login using $oAuthProvider `, response);
        this.dialogRef.close(this.signinForm.value);
        this.authService.navigateToRedirectUrlAfterAuth();
      })
      .catch(error => {
        this.signinError = error.message;
        console.error(
          `Error while signin using oAuthProvider Gmail $oAuthProvider`,
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
