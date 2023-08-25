import { Directive, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {
  input = inject(HTMLInputElement);

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(): void {
    this.input.style.backgroundColor = '#D2691E';
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(): void {
    this.input.style.backgroundColor = '#FFFFFF';
  }
}
