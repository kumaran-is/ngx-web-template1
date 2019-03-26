import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from '@app/authentication/authentication-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [SharedModule, AuthenticationRoutingModule],
  declarations: [AuthenticationRoutingModule.components]
})
export class AuthenticationModule {}
