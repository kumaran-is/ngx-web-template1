import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from '@app/payment/payment.component';
import { AuthenticationGuard } from '@auth/guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent,
    canActivate: [AuthenticationGuard],
    data: { pageTitle: 'My Payment' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule {
  static components = [PaymentComponent];
}
