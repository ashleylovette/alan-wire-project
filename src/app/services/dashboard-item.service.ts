import { Injectable } from '@angular/core';
import { DashboardItem } from '../main-grid/dashboard-item/dashboard-item.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardItemService {
  private dashItems: DashboardItem[] = [];

  constructor() {}

  getDashItems() {
    return this.dashItems.slice();
  }

  getItem(index: number) {
    return this.dashItems[index];
  }
}
