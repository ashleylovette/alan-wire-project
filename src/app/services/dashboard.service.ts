// NEEDS

//Observable/Subject to update UI when this array changes.

// Function to return ONLY the selected Dashboard's contents.
// Function to Delete Selected Item from Selected Dashboard.

import { EventEmitter, Injectable } from '@angular/core';
import { Dashboard } from '../main-grid/dashboard.model';
import { DashboardItem } from '../main-grid/dashboard-item/dashboard-item.model';
import { Subject } from 'rxjs';
import { DashboardItemService } from './dashboard-item.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  dashboardDeleted = new Subject<object>();
  dashboardsChanged = new Subject<Dashboard[]>();
  dashboardSelected = new Subject<object>();
  dashboardCleared = new EventEmitter<any>();
  dashboardWasSelected: boolean;
  currDashIdx: number;

  private dashArray: Dashboard[] = [
    {
      name: 'Test 1',
      items: [
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
      ],
    },
    {
      name: 'Test 2',
      items: [
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
        {
          name: 'Graph 1',
          size: 3,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg',
        },
      ],
    },
    {
      name: 'Test 3',
      items: [
        {
          name: 'Graph 3',
          size: 2,
          imgPath:
            'https://blogs.sas.com/content/graphicallyspeaking/files/2014/12/graphTable-300x225.png',
        },
        {
          name: 'Graph 2',
          size: 1,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/bar-and-line-graph-1.jpg',
        },
        {
          name: 'Graph 1',
          size: 3,
          imgPath:
            'https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg',
        },
      ],
    },
  ];

  addDashboard = new Subject<void>();

  constructor(private dashboardItemService: DashboardItemService) {}

  getDashNames(index: number) {
    return this.dashArray[index].name;
  }

  getArray() {
    return this.dashArray.slice();
  }

  createDashboard(name: string) {
    this.dashArray.push({ name: name });
    this.dashboardsChanged.next(this.dashArray.slice());
  }

  deleteDashboard(index: number) {
    if (index !== -1) {
      this.dashArray.splice(index, 1);
      this.dashboardsChanged.next(this.dashArray.slice());
      this.dashboardDeleted.next(this.dashArray[index]);
    }
  }

  getName(index: number) {
    return this.dashArray[index].name;
  }

  getDashboard(index: number) {
    return this.dashArray.slice()[index];
  }

  addDashItem(dashItem: DashboardItem) {
    this.dashArray[this.currDashIdx].items.push(dashItem);
  }

  deleteDashItem(index: number, item: number) {
    this.dashArray[index].items.splice(item, 1);
  }
}
