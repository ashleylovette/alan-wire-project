import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent implements OnInit {
  leftOpen = true;
  leftChevron: string = 'chevron_right';
  rightOpen = true;
  rightChevron: string = 'chevron_left';

  constructor() {}

  ngOnInit(): void {}

  leftToggle() {
    this.leftOpen = !this.leftOpen;
    if (this.leftOpen) {
      document.getElementById('leftBar').className = 'hide';
    } else if (!this.leftOpen) {
      document.getElementById('leftBar').className = 'left-col';
    }
    this.leftToggleIcon();
  }

  leftToggleIcon() {
    if (this.leftChevron === 'chevron_right') {
      this.leftChevron = 'chevron_left';
    } else {
      this.leftChevron = 'chevron_right';
    }
  }

  rightToggle() {
    this.rightOpen = !this.rightOpen;
    if (this.rightOpen) {
      document.getElementById('rightBar').className = 'hide';
    } else if (!this.rightOpen) {
      document.getElementById('rightBar').className = 'right-col';
      this.rightToggleIcon();
    }
  }

  rightToggleIcon() {
    if (this.rightChevron === 'chevron_left') {
      this.rightChevron = 'chevron_right';
    } else {
      this.rightChevron = 'chevron_left';
    }
  }
}
