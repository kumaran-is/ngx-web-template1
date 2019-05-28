import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginMenuComponent } from '@app/auth/login-menu/login-menu.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LoginMenuComponent],
  imports: [SharedModule, RouterModule.forChild([])],
  exports: [LoginMenuComponent]
})
export class LoginMenuModule {}
