import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorHandlerInterceptor } from '@app/error-handler/error-handler.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // order for interceptors matters
    ErrorHandlerInterceptor
  ]
})
export class ErrorHandlerModule {}
