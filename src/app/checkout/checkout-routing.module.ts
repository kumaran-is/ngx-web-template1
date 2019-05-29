import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from '@app/checkout/checkout.component';
import { AuthenticationGuard } from '@auth/guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    component: CheckoutComponent,
    data: { pageTitle: 'My Checkout' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {
  static components = [CheckoutComponent];
}
