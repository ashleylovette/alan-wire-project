import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleRightSidebar]'
})
export class ToggleRightSidebarDirective {
  @HostBinding('class.toggle-right-sidebar') isOpen = true;

  constructor() { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if(this.isOpen) {
      document.getElementById('rightBar').className = 'hide'
      if(document.getElementById('centerContent').className = 'small') {
        document.getElementById('centerContent').className = 'medium';
      } else if(document.getElementById('centerContent').className = 'medium') {
        document.getElementById('centerContent').className = 'large';
      }
    } else if(!this.isOpen) {
      document.getElementById('rightBar').className = 'small'
      if(document.getElementById('centerContent').className = 'large') {
        document.getElementById('centerContent').className = 'medium';
      } else if(document.getElementById('centerContent').className = 'medium') {
        document.getElementById('centerContent').className = 'small';
      }
    }
  }
}
