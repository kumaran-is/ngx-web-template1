import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MatIconRegistry,
  MAT_DIALOG_DATA
} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthConstants } from '@app/auth/auth.constants';
import { Credential } from '@app/auth/models/credential.model';
import { IDialog } from '@app/auth/models/dialog.interface';
import { AuthValidatorsService } from '@app/auth/services/auth-validators.service';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.scss']
})
export class SignUpDialogComponent implements OnInit {
  public signupForm: FormGroup;
  public hide = true;
  public dialogTitle: string;
  public signupError: string;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<SignUpDialogComponent>,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    @Inject('IDialog') private dialogService: IDialog,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private authConstants: AuthConstants,
    private authValidatorsService: AuthValidatorsService
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
    this.signupForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.authConstants.EMAIL_REGEXP)
        ],
        this.authValidatorsService.usernameTakenValidator.bind(
          this.authValidatorsService
        )
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(30)]
      ]
    });
  }

  // convenience getter for easy access to form fields
  public get email() {
    return this.signupForm.get('email');
  }

  public get password() {
    return this.signupForm.get('password');
  }

  public getEmailControlErrorMessage() {
    return this.email.hasError('required')
      ? 'Enter your Email'
      : this.email.hasError('pattern')
      ? 'Not a valid Email'
      : this.email.hasError('usernameTaken')
      ? 'Account already exists with this email'
      : '';
  }

  public getPasswordControlErrorMessage() {
    return this.password.hasError('required')
      ? 'Enter your Password'
      : this.password.hasError('minlength')
      ? 'Should be at least 6 characters long'
      : this.password.hasError('maxlength')
      ? 'Should not be more than 30 characters long'
      : '';
  }

  public doSignupWithEmail() {
    // stop here, don't allow to submit the form  if form is invalid
    if (this.signupForm.invalid) {
      return;
    } else {
      const credential: Credential = new Credential();
      credential.email = this.email.value;
      credential.password = this.password.value;
      this.authService
        .signupWithEmail(credential)
        .then(result => {
          console.log('Signup is successful', result);
          this.dialogRef.close('close');
          this.authService.navigateToRedirectUrlAfterAuth();
        })
        .catch(error => {
          this.signupError = error.message;
          console.error('Error while signup with Email', error);
        });
    }
  }

  public doLoginWithOAuthProvider(oAuthProvider: string) {
    this.authService
      .loginWithOAuthProvider(oAuthProvider)
      .then(response => {
        console.log(`successfull login using $oAuthProvider `, response);
        this.dialogRef.close(this.signupForm.value);
        this.authService.navigateToRedirectUrlAfterAuth();
      })
      .catch(error => {
        this.signupError = error.message;
        console.error(
          `Error while signup using oAuthProvider Gmail $oAuthProvider`,
          error
        );
      });
  }

  public closeDialog() {
    this.dialogRef.close('close');
  }

  public openLoginDialog() {
    this.closeDialog();
    this.dialogService.popupDialog('login');
  }
}
