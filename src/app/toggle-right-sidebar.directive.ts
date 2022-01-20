import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleRightSidebar]'
})
export class ToggleRightSidebarDirective {
  @HostBinding('class.toggle-right-sidebar') isOpen = true;

  constructor() { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
