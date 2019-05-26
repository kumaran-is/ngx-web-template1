import {
  Directive,
  NgZone,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
/*
Hello <ng-template appOneTime]>{{name}}</ng-template>!
*/
@Directive({
  selector: '[appOneTime]'
})
export class OneTimeDirective {
  constructor(
    template: TemplateRef<any>,
    container: ViewContainerRef,
    zone: NgZone
  ) {
    zone.runOutsideAngular(() => {
      const view = container.createEmbeddedView(template);
      setTimeout(() => view.detach());
    });
  }
}
