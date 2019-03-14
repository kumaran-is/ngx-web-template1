import { NgModule } from '@angular/core';
import { PageNotFoundRoutingModule } from '@app/page-not-found/page-not-found-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [PageNotFoundRoutingModule.components],
  imports: [SharedModule, PageNotFoundRoutingModule]
})
export class PageNotFoundModule {}
