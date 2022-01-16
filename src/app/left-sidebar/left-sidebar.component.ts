import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent implements OnInit {
  isOpen = false;
  @Output()toggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.toggle.emit();
    if(this.isOpen) {
      document.getElementById('left-sidebar').style.marginRight='15%';
      document.getElementById('container-grid').style.marginLeft='15%';
    } else {
      document.getElementById('left-sidebar').style.marginRight='0';
      document.getElementById('container-grid').style.marginLeft='0';
    }
  }
}
