import { NgModule } from '@angular/core';
import { AboutusRoutingModule } from '@app/aboutus/aboutus-routing.module';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [AboutusRoutingModule.components],
  imports: [SharedModule, AboutusRoutingModule]
})
export class AboutusModule {}
