import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ChangePasswordRoutingModule } from './change-password-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, ChangePasswordRoutingModule],
  declarations: [ChangePasswordRoutingModule.components]
})
export class ChangePasswordModule {}
