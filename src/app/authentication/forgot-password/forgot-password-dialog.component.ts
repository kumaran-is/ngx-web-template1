import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialog } from '@app/authentication/models/dialog.interface';
import { AuthenticationService } from '@app/authentication/services/authentication.service';

@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.scss']
})
export class ForgotPasswordDialogComponent implements OnInit {
  public forgotPasswordForm: FormGroup;
  public hide = true;
  public dialogTitle: string;
  public forgotPasswordError: string;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ForgotPasswordDialogComponent>,
    @Inject('IDialog') private dialogService: IDialog,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.dialogTitle = data.title;
  }

  public ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // convenience getter for easy access to form fields
  public get email() {
    return this.forgotPasswordForm.get('email');
  }

  public getEmailControlErrorMessage() {
    return this.email.hasError('required')
      ? 'Enter your Email'
      : this.email.hasError('email')
      ? 'Not a valid Email'
      : '';
  }

  public doSendForgotPasswordLink() {
    // stop here, don't allow to submit the form  if form is invalid
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    this.authenticationService
      .resetPassword(this.email.value)
      .then(() => {
        this.openAcknowledgementDialog();
      })
      .catch(error => {
        this.forgotPasswordError = error.message;
        console.error('Error while sending reset password link', error);
      });
  }

  public closeDialog() {
    this.dialogRef.close('close');
  }

  public openSigninDialog() {
    this.closeDialog();
    this.dialogService.popupDialog('signin');
  }

  private openAcknowledgementDialog() {
    this.dialogRef.close(this.email.value);
    this.dialogService.popupDialog('acknowlegment');
  }
}
