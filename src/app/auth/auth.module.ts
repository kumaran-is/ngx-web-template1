import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from '@app/auth/auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import { LoginMenuComponent } from './login-menu/login-menu.component';

@NgModule({
  imports: [SharedModule, AuthenticationRoutingModule],
  declarations: [AuthenticationRoutingModule.components, LoginMenuComponent],
  exports: [LoginMenuComponent],
  entryComponents: [AuthenticationRoutingModule.components]
})
export class AuthModule {}
