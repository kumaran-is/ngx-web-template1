import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/home/home.component';
import { AppShellComponent } from '@layout/app-shell/app-shell.component';
import { PageNotFoundComponent } from '@layout/page-not-found/page-not-found.component';

const routes: Routes = [{
    path: '', component: AppShellComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'cart', loadChildren: '@app/cart/cart.module#CartModule' },
      { path: '', pathMatch: 'full', redirectTo: 'home' }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

