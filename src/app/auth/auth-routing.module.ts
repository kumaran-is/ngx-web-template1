import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcknowledgementDialogComponent } from '@app/auth/acknowledgement/acknowledgement-dialog.component';
import { ForgotPasswordDialogComponent } from '@app/auth/forgot-password/forgot-password-dialog.component';
import { LoginDialogComponent } from '@app/auth/login/login-dialog.component';
import { LogoutComponent } from '@app/auth/logout/logout.component';
import { SignupComponent } from '@app/auth/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginDialogComponent },
  { path: 'login', component: LoginDialogComponent },
  { path: 'forgot-password', component: ForgotPasswordDialogComponent },
  { path: 'acknowledgement', component: AcknowledgementDialogComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'sign-up', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
  static components = [
    AcknowledgementDialogComponent,
    ForgotPasswordDialogComponent,
    LoginDialogComponent,
    LogoutComponent,
    SignupComponent
  ];
}
