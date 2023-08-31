import { Directive, HostBinding, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() color: string = "lightgrey";
  @HostBinding('style.background') backGroundColor!: string;

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(): void {
    this.backGroundColor = this.color;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(): void {
    this.backGroundColor = "";
  }
}
