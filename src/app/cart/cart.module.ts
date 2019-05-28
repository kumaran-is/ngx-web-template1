import { NgModule } from '@angular/core';
import { CartRoutingModule } from '@app/cart/cart-routing.module';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [CartRoutingModule.components],
  imports: [SharedModule, CartRoutingModule]
})
export class CartModule {}
