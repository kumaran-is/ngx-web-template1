import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HoverDirective } from './directives/hover.directive';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [HoverDirective],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [CommonModule, ReactiveFormsModule, MaterialModule, HoverDirective]
})
export class SharedModule {}
