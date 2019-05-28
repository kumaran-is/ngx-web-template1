import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from '@app/auth/auth-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [SharedModule, AuthenticationRoutingModule]
})
export class AuthModule {}
