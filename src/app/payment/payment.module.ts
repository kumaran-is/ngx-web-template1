import { NgModule } from '@angular/core';
import { PaymentRoutingModule } from '@app/payment/payment-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [PaymentRoutingModule.components],
  imports: [SharedModule, PaymentRoutingModule]
})
export class PaymentModule {}
