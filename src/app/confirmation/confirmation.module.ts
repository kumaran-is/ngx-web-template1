import { NgModule } from '@angular/core';
import { ConfirmationRoutingModule } from '@app/confirmation/confirmation-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ConfirmationRoutingModule.components],
  imports: [SharedModule, ConfirmationRoutingModule]
})
export class ConfirmationModule {}
