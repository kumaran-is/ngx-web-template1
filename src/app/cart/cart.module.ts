import { NgModule } from '@angular/core';
import { CartRoutingModule } from '@app/cart/cart-routing.module';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  imports: [
    SharedModule,
    CartRoutingModule
  ],
  declarations: [CartRoutingModule.components]
})
export class CartModule { }
