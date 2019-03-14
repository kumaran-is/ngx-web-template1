import { NgModule } from '@angular/core';
import { UnderMaintenanceRoutingModule } from '@app/under-maintenance/under-maintenance-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [UnderMaintenanceRoutingModule.components],
  imports: [SharedModule, UnderMaintenanceRoutingModule]
})
export class UnderMaintenanceModule {}
