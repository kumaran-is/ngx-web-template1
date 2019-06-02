import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcknowledgementDialogComponent } from '@auth/acknowledgement/acknowledgement-dialog.component';
import { ForgotPasswordDialogComponent } from '@auth/forgot-password/forgot-password-dialog.component';
import { LoginMenuComponent } from '@auth/login-menu/login-menu.component';
import { LoginDialogComponent } from '@auth/login/login-dialog.component';
import { SignUpDialogComponent } from '@auth/sign-up/sign-up-dialog.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AcknowledgementDialogComponent,
    ForgotPasswordDialogComponent,
    LoginDialogComponent,
    SignUpDialogComponent,
    LoginMenuComponent
  ],
  imports: [SharedModule, RouterModule.forChild([])],
  exports: [LoginMenuComponent],
  entryComponents: [
    AcknowledgementDialogComponent,
    ForgotPasswordDialogComponent,
    LoginDialogComponent,
    SignUpDialogComponent
  ]
})
export class LoginMenuModule {}
