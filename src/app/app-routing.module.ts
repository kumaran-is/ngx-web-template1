import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/home/home.component';
import { AppShellComponent } from '@layout/app-shell/app-shell.component';

const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'auth',
        loadChildren: () =>
          import('@app/auth/my-profile/my-profile.module').then(
            m => m.MyProfileModule
          )
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('@app/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('@app/checkout/checkout.module').then(m => m.CheckoutModule)
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('@app/payment/payment.module').then(m => m.PaymentModule)
      },
      {
        path: 'confirmation',
        loadChildren: () =>
          import('@app/confirmation/confirmation.module').then(
            m => m.ConfirmationModule
          )
      },
      {
        path: 'under-maintenance',
        loadChildren: () =>
          import('@app/under-maintenance/under-maintenance.module').then(
            m => m.UnderMaintenanceModule
          )
      },
      { path: '', pathMatch: 'full', redirectTo: 'home' }
    ]
  },
  {
    path: '**',
    loadChildren: () =>
      import('@app/page-not-found/page-not-found.module').then(
        m => m.PageNotFoundModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
