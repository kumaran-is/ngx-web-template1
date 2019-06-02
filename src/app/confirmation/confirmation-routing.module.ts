import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from '@app/confirmation/confirmation.component';
import { AuthenticationGuard } from '@auth/guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationComponent,
    canActivate: [AuthenticationGuard],
    data: { pageTitle: 'My Order Confirmation' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmationRoutingModule {
  static components = [ConfirmationComponent];
}
