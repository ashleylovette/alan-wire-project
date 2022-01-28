import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {
  @Input()confirmMsg: string;
  @Output()cancelDelete = new EventEmitter<void>();
  @Output()deleteDash = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onCancel() {
    this.cancelDelete.emit();
  }

  onDeleteDash() {
    this.deleteDash.emit();
  }
}
