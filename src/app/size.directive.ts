import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DashboardItem } from './dashboard/main-grid/dashboard-item/dashboard-item.model';

@Directive({
  selector: '[appSize]'
})
export class SizeDirective implements OnInit{
  @Input() dbItem: DashboardItem;
  size: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
     this.size = this.dbItem.size;

     if(this.size === 1) {
      this.renderer.addClass(this.elementRef.nativeElement, 'small');
     } else if (this.size === 2) {
       this.renderer.addClass(this.elementRef.nativeElement, 'medium');
     } else if (this.size === 3) {
       this.renderer.addClass(this.elementRef.nativeElement, 'large');
     } else return;
  }

}
