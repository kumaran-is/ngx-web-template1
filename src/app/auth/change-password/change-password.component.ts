import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthValidatorsService } from '@auth/services/auth-validators.service';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public changePasswordForm: FormGroup;
  public isHidePassword = true;
  public isHideConfirmPassword = true;
  public changePasswordErrorMsg: string;
  public changePasswordSuccessMsg: string;
  private confirmationCode: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private authValidatorsService: AuthValidatorsService
  ) {}

  public ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.confirmationCode = queryParams.oobCode;
    });
    this.changePasswordForm = this.formBuilder.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30)
          ]
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30)
          ]
        ]
      },
      {
        validator: this.authValidatorsService.matchingPasswordValidator(
          'password',
          'confirmPassword'
        )
      }
    );
  }

  // convenience getter for easy access to form fields
  public get password() {
    return this.changePasswordForm.get('password');
  }

  public get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

  public getPasswordControlErrorMessage() {
    return this.password.hasError('required')
      ? 'Enter your New Password'
      : this.password.hasError('minlength')
      ? 'Should be at least 6 characters long'
      : this.password.hasError('maxlength')
      ? 'Should not be more than 30 characters long'
      : '';
  }

  public getConfirmPasswordControlErrorMessage() {
    return this.confirmPassword.hasError('required')
      ? 'Enter your Confirm New Password'
      : this.confirmPassword.hasError('minlength')
      ? 'Should be at least 6 characters long'
      : this.confirmPassword.hasError('maxlength')
      ? 'Should not be more than 30 characters long'
      : this.confirmPassword.hasError('mismatchedPasswords')
      ? 'New Password and Confirm New Password does not match'
      : '';
  }

  public doChangePassword() {
    // stop here, don't allow to submit the form  if form is invalid
    if (this.changePasswordForm.invalid) {
      return;
    } else {
      this.authService
        .changePassword(this.confirmationCode, this.password.value)
        .then(() => {
          console.log('successfull changepassword');
          this.changePasswordSuccessMsg = `Your new password has been updated. Please login with new password`;
        })
        .catch(error => {
          this.changePasswordErrorMsg = error.message;
          console.error(`Error while changing password`, error);
        });
    }
  }
}
