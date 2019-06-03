import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '@app/aboutus/aboutus.component';

const routes: Routes = [
  {
    path: '',
    component: AboutusComponent,
    data: { pageTitle: 'About our Company' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule {
  static components = [AboutusComponent];
}
