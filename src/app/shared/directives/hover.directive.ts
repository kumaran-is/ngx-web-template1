import { Directive, ElementRef, HostListener, Input } from '@angular/core';
/*
 * Usage: when we hover over the element it receives the blue color
 * <p appHover [hoverColor]="'blue'">this is hoverable text</p>
 */
@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input() public hoverColor: string;

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightElement(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlightElement(null);
  }

  private highlightElement(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
