import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '@auth/guards/authentication.guard';
import { AddressInfoComponent } from './address-info/address-info.component';
import { MyProfileComponent } from './my-profile.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const routes: Routes = [
  {
    path: 'my-profile',
    component: MyProfileComponent,
    canActivate: [AuthenticationGuard],
    data: { pageTitle: 'My Profile' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule {
  static components = [
    MyProfileComponent,
    PersonalInfoComponent,
    AddressInfoComponent,
    PaymentInfoComponent,
    UpdatePasswordComponent
  ];
}
