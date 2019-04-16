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
        loadChildren: '@app/auth/auth.module#AuthModule'
      },
      { path: 'cart', loadChildren: '@app/cart/cart.module#CartModule' },
      {
        path: 'under-maintenance',
        loadChildren:
          '@app/under-maintenance/under-maintenance.module#UnderMaintenanceModule'
      },
      { path: '', pathMatch: 'full', redirectTo: 'home' }
    ]
  },
  {
    path: '**',
    loadChildren: '@app/page-not-found/page-not-found.module#PageNotFoundModule'
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
