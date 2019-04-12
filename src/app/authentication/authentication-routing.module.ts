import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from '@app/authentication/forgot-password/forgot-password.component';
import { LoginComponent } from '@app/authentication/login/login.component';
import { LogoutComponent } from '@app/authentication/logout/logout.component';
import { ResetPasswordComponent } from '@app/authentication/reset-password/reset-password.component';
import { SignupComponent } from '@app/authentication/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'reset-password', component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
  static components = [
    ForgotPasswordComponent,
    LoginComponent,
    LogoutComponent,
    ResetPasswordComponent,
    SignupComponent
  ];
}
