import { Injectable } from '@angular/core';
import { DashboardItem } from '../main-grid/dashboard-item/dashboard-item.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardItemService {
  private dashItems: DashboardItem[] = [
    {
      name: 'Financial Estimates',
      size: 3,
      imgPath:
        'https://cdn.corporatefinanceinstitute.com/assets/waterfall-chart-2.jpg',
    },
    {
      name: 'Production Estimates',
      size: 1,
      imgPath:
        'https://cdn.corporatefinanceinstitute.com/assets/bar-and-line-graph-1.jpg',
    },
    {
      name: 'Sales Estimates',
      size: 2,
      imgPath:
        'https://cdn.corporatefinanceinstitute.com/assets/types-of-graphs-bar-graph.jpg',
    },
  ];

  constructor() {}

  getDashItems() {
    return this.dashItems.slice();
  }

  getItem(index: number) {
    return this.dashItems[index];
  }
}
