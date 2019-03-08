import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from '@layout/app-shell/app-shell.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';
import { PageNotFoundComponent } from '@layout/page-not-found/page-not-found.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AppShellComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [RouterModule, SharedModule]
})
export class LayoutModule {}
