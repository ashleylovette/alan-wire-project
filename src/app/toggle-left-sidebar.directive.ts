import { Directive, HostBinding, HostListener } from '@angular/core';


@Directive({
  selector: '[appToggleLeftSidebar]'
})
export class ToggleSidebarDirective {
  @HostBinding('class.toggle-left-sidebar') isOpen = true;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if(this.isOpen) {
      document.getElementById('leftBar').className = 'hide'
      if(document.getElementById('centerContent').className = 'small') {
        document.getElementById('centerContent').className = 'medium';
      } else if(document.getElementById('centerContent').className = 'medium') {
        document.getElementById('centerContent').className = 'large';
      }
    } else if(!this.isOpen) {
      document.getElementById('leftBar').className = 'small'
      if(document.getElementById('centerContent').className = 'large') {
        document.getElementById('centerContent').className = 'medium';
      } else if(document.getElementById('centerContent').className = 'medium') {
        document.getElementById('centerContent').className = 'small';
      }
    }
  }


}
