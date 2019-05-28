import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthValidatorsService } from '@app/auth/services/auth-validators.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  public updatePasswordForm: FormGroup;
  public isHidePassword = true;
  public isHideConfirmPassword = true;
  public isHideOldPassword = true;
  @Input() public updatePasswordErrorMsg: string;
  @Input() public updatePasswordSuccessMsg: string;
  @Output() public updateUserPassword = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private authValidatorsService: AuthValidatorsService
  ) {}

  ngOnInit() {
    this.updatePasswordForm = this.formBuilder.group(
      {
        oldPassword: ['', [Validators.required]],
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
    return this.updatePasswordForm.get('password');
  }

  public get confirmPassword() {
    return this.updatePasswordForm.get('confirmPassword');
  }

  public get oldPassword() {
    return this.updatePasswordForm.get('oldPassword');
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

  public getOldPasswordControlErrorMessage() {
    return this.oldPassword.hasError('required')
      ? 'Enter your Old Password'
      : '';
  }

  public doUpdatePassword() {
    // stop here, don't allow to submit the form  if form is invalid
    if (this.updatePasswordForm.invalid) {
      return;
    } else {
      console.log('doUserPassword');
      const passwordObj = {
        oldPassword: this.oldPassword.value,
        newPassword: this.password.value
      };
      this.updateUserPassword.emit(passwordObj);
    }
  }
}
