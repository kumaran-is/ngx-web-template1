import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MyProfileRoutingModule } from './my-profile-routing.module';

@NgModule({
  imports: [SharedModule, MyProfileRoutingModule],
  declarations: [MyProfileRoutingModule.components]
})
export class MyProfileModule {}
