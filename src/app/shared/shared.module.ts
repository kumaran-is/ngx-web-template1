import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HoverDirective } from '@shared/directives/hover.directive';
import { OneTimeDirective } from '@shared/directives/one-time.directive';
import { MaterialModule } from '@shared/material/material.module';
import { TruncatePipe } from '@shared/pipes/truncate.pipe';

@NgModule({
  declarations: [HoverDirective, OneTimeDirective, TruncatePipe],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HoverDirective,
    OneTimeDirective,
    TruncatePipe
  ]
})
export class SharedModule {}
