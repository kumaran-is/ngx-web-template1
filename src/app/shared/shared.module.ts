import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HoverDirective } from '@shared/directives/hover.directive';
import { OneTimeDirective } from '@shared/directives/one-time.directive';
import { MaterialModule } from '@shared/material/material.module';
import { TruncatePipe } from '@shared/pipes/truncate.pipe';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [HoverDirective, OneTimeDirective, TruncatePipe],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, QuicklinkModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HoverDirective,
    OneTimeDirective,
    TruncatePipe,
    QuicklinkModule
  ]
})
export class SharedModule {}
