import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginMenuModule } from '@app/auth/login-menu/login-menu.module';
import { AppShellComponent } from '@layout/app-shell/app-shell.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AppShellComponent, FooterComponent, HeaderComponent],
  imports: [RouterModule, SharedModule, LoginMenuModule]
})
export class LayoutModule {}
