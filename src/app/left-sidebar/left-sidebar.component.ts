import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
  animations: [
    trigger('slideLeftRight', [
      state('open',
        style({
          width: '16.67%',
          height: '100vh',
        })
      ),
      state('closed',
        style({
          width: '0',
          height: '100vh',
          })
        ),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ])
  ]
})
export class LeftSidebarComponent implements OnInit {
  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;

  }
}
