import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleLeftSidebar]'
})
export class ToggleSidebarDirective {
  @HostBinding('class.toggle-left-sidebar') isOpen = true;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }


}
