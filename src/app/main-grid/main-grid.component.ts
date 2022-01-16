import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {
  isOpen = false;
  @Input()toggle: any;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleLeftSidebar() {
    if (this.isOpen) {
      document.getElementById('left-sidebar').style.marginRight='15%';
      document.getElementById('container-grid').style.marginLeft='15%';
    } else {
      document.getElementById('left-sidebar').style.marginRight='0';
      document.getElementById('container-grid').style.marginLeft='0';
    }
  }
}
