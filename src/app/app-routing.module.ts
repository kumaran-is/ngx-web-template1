import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/home/home.component';
import { NetworkAwarePreloadStrategyService } from '@app/route-utility/network-aware-preload-strategy.service';
import { AuthenticationGuard } from '@auth/guards/authentication.guard';
import { AppShellComponent } from '@layout/app-shell/app-shell.component';
// import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        // TODO: Get proper page name & keys from SEO specialist and update pageTitle
        data: { pageTitle: 'My Home' }
      },
      {
        path: 'auth',
        canLoad: [AuthenticationGuard],
        loadChildren: () =>
          import('@auth/my-profile/my-profile.module').then(
            m => m.MyProfileModule
          )
      },
      {
        path: 'cart',
        data: { preload: true, delay: true },
        loadChildren: () =>
          import('@app/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'checkout',
        canLoad: [AuthenticationGuard],
        loadChildren: () =>
          import('@app/checkout/checkout.module').then(m => m.CheckoutModule)
      },
      {
        path: 'payment',
        canLoad: [AuthenticationGuard],
        loadChildren: () =>
          import('@app/payment/payment.module').then(m => m.PaymentModule)
      },
      {
        path: 'confirmation',
        canLoad: [AuthenticationGuard],
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
      {
        path: 'aboutus',
        loadChildren: () =>
          import('@app/aboutus/aboutus.module').then(m => m.AboutusModule)
      },
      { path: '', pathMatch: 'full', redirectTo: 'home' },

      {
        /* wildcard route using ** as a path should be last in the order */
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
          import('@app/page-not-found/page-not-found.module').then(
            m => m.PageNotFoundModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: NetworkAwarePreloadStrategyService,
      // preloadingStrategy: QuicklinkStrategy,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
