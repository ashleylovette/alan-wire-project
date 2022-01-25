import { Injectable } from '@angular/core';
import { DashboardItem } from '../dashboard/main-grid/dashboard-item/dashboard-item.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardItemService {
  private dashItems: DashboardItem[] = [
    {
      name: 'Graph 1',
      size: 3,
      imgPath:
        'https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg',
    },
    {
      name: 'Graph 2',
      size: 1,
      imgPath:
        'https://cdn.corporatefinanceinstitute.com/assets/bar-and-line-graph-1.jpg',
    },
    {
      name: 'Graph 3',
      size: 2,
      imgPath:
        'https://blogs.sas.com/content/graphicallyspeaking/files/2014/12/graphTable-300x225.png',
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
