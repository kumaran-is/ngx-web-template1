import { NgModule } from '@angular/core';
import { CheckoutRoutingModule } from '@app/checkout/checkout-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [CheckoutRoutingModule.components],
  imports: [SharedModule, CheckoutRoutingModule]
})
export class CheckoutModule {}
