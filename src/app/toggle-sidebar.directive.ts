import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleSidebar]'
})
export class ToggleSidebarDirective {
  @HostBinding('class.toggle-sidebar') isOpen = true;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }


}
