// NEEDS

//Observable/Subject to update UI when this array changes.

// Function to return ONLY the selected Dashboard's contents.
// Function to Delete Selected Item from Selected Dashboard.

import { EventEmitter, Injectable } from '@angular/core';
import { Dashboard } from '../main-grid/dashboard.model';
import { DashboardItem } from '../main-grid/dashboard-item/dashboard-item.model';
import { Subject } from 'rxjs';
import { DashboardItemService } from './dashboard-item.service';
import { Salesman } from '../main-grid/dashboard-item/salesman.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  cancelDelete = new EventEmitter();
  deleteDash = new Subject<Dashboard>();
  dashboardDeleted = new EventEmitter();
  dashboardsChanged = new Subject<Dashboard[]>();
  dashboardSelected = new Subject<object>();
  dashboardCleared = new EventEmitter<any>();
  dashboardWasSelected: boolean;
  currDashIdx: number;
  totalSalesArray = [];
  totalQtyArray = [];
  private salesmen: Salesman[] = [
    // {
    //   name: "Mako Mori",
    //   qty_wire: 9900,
    //   part_number: "14NO35",
    //   dollar_amount_sold: 0.13031,
    //   region: "South"
    // },
    // {
    //   name: "Raleigh Becket",
    //   qty_wire: 4900,
    //   part_number: "14NO35",
    //   dollar_amount_sold: 0.13031,
    //   region: "South"
    // },
    // {
    //   name: "Stacker Pentecost",
    //   qty_wire: 15900,
    //   part_number: "14NO35",
    //   dollar_amount_sold: 0.13031,
    //   region: "South"
    // },
    // {
    //   name: "Sasha Kaidanovsky",
    //   qty_wire: 5900,
    //   part_number: "14NO35",
    //   dollar_amount_sold: 0.13031,
    //   region: "South"
    // },
    // {
    //   name: "Harry Potter",
    //   qty_wire: 9500,
    //   part_number: "14NO35",
    //   dollar_amount_sold: 0.13031,
    //   region: "North"
    // },
    // {
    //   name: "Hermione Granger",
    //   qty_wire: 4500,
    //   part_number: "14NO35",
    //   dollar_amount_sold: 0.13031,
    //   region: "North"
    // },
    // {
    //   name: "Ron Weasley",
    //   qty_wire: 15500,
    //   part_number: "14NO35",
    //   dollar_amount_sold: 0.13031,
    //   region: "North"
    // },
    // {
    //   name: "Ginny Weasley",
    //   qty_wire: 5500,
    //   part_number: "14NO35",
    //   dollar_amount_sold: 0.13031,
    //   region: "North"
    // },
    // {
    //   name: "Jethro Gibbs",
    //   qty_wire: 9300,
    //   part_number: "14NO35",
    //   dollar_amount_sold: 0.13031,
    //   region: "East"
    // },
    // {
    //   name: "Timothy McGee",
    //   qty_wire: 4300,
    //   part_number: "14NO35",
    //   dollar_amount_sold: 0.13031,
    //   region: "East"
    // },
    // {
    //   name: "Ziva David",
    //   qty_wire: 15300,
    //   part_number: "14NO35",
    //   dollar_amount_sold: 0.13031,
    //   region: "East"
    // },
    // {
    //   name: "Tobias Fornell",
    //   qty_wire: 5300,
    //   part_number: "14NO35",
    //   dollar_amount_sold: 0.13031,
    //   region: "East"
    // },
    {
      name: "Tony Stark",
      qty_wire: 9000,
      part_number: "14NO35",
      dollar_amount_sold: 0.13031,
      region: "West"
  },
  {
      name: "Luke Skywalker",
      qty_wire: 4000,
      part_number: "14NO35",
      dollar_amount_sold: 0.13031,
      region: "West"
  },
  {
      name: "Leia Skywalker",
      qty_wire: 15000,
      part_number: "14NO35",
      dollar_amount_sold: 0.13031,
      region: "West"
  },
  {
      name: "James Kirk",
      qty_wire: 5000,
      part_number: "14NO35",
      dollar_amount_sold: 0.13031,
      region: "West"
    }
  ]

  private dashboardItems: DashboardItem[] = [
    {name: "James Kirk",
    size: 1,
    display_type: 1,
    salesman: [{
      name: "James Kirk",
      qty_wire: 5000,
      part_number: "14NO35",
      dollar_amount_sold: 0.13031,
      region: "West"
    }]
    },
    {name: "Luke Skywalker",
    size: 1,
    display_type: 1,
    salesman: [{
      name: "Luke Skywalker",
      qty_wire: 4000,
      part_number: "14NO35",
      dollar_amount_sold: 0.13031,
      region: "West"
    }]
    },
    {
      name: "Tony Stark",
      size: 1,
      display_type: 1,
      salesman: [{
        name: "Tony Stark",
        qty_wire: 9000,
        part_number: "14NO35",
        dollar_amount_sold: 0.13031,
        region: "West"
    }]
    },
    {
      name: "Leia Skywalker",
      size: 1,
      display_type: 1,
      salesman: [{
        name: "Leia Skywalker",
        qty_wire: 15000,
        part_number: "14NO35",
        dollar_amount_sold: 0.13031,
        region: "West"
    }]
    },
    {name: "Western Sales",
    size: 3,
    display_type: 2,
    salesman: [{
      name: "Leia Skywalker",
      qty_wire: 15000,
      part_number: "14NO35",
      dollar_amount_sold: 0.13031,
      region: "West"
  },
  {
    name: "Tony Stark",
    qty_wire: 9000,
    part_number: "14NO35",
    dollar_amount_sold: 0.13031,
    region: "West"
  },
  {
    name: "Luke Skywalker",
    qty_wire: 4000,
    part_number: "14NO35",
    dollar_amount_sold: 0.13031,
    region: "West"
  },
  {
    name: "James Kirk",
    qty_wire: 5000,
    part_number: "14NO35",
    dollar_amount_sold: 0.13031,
    region: "West"
  }]
}]
private dashboards: Dashboard[] = [
  {name: "Sales 1", items:
  [
  // item one
  {
    name: "James Kirk",
    size: 1,
    display_type: 1,
    salesman: [{
      name: "James Kirk",
      qty_wire: 5000,
      part_number: "14NO35",
      dollar_amount_sold: 0.13031,
      region: "West"
    }]
  },
  // item 2
  {
    name: "Luke Skywalker",
    size: 1,
    display_type: 1,
    salesman: [{
    name: "Luke Skywalker",
    qty_wire: 4000,
    part_number: "14NO35",
    dollar_amount_sold: 0.13031,
    region: "West"
  }]
  },
  // item 3
  {
    name: "Tony Stark",
    size: 1,
    display_type: 1,
    salesman: [{
      name: "Tony Stark",
      qty_wire: 9000,
      part_number: "14NO35",
      dollar_amount_sold: 0.13031,
      region: "West"
    }]
  },
  // item 4
  {
    name: "Leia Skywalker",
    size: 1,
    display_type: 1,
    salesman: [{
      name: "Leia Skywalker",
      qty_wire: 15000,
      part_number: "14NO35",
      dollar_amount_sold: 0.13031,
      region: "West"
    }]
  },
  // item 5
  {
    name: "Western Sales",
    size: 3,
    display_type: 2,
    salesman: [{
      name: "Leia Skywalker",
      qty_wire: 15000,
      part_number: "14NO35",
      dollar_amount_sold: 0.13031,
      region: "West"
    },
    {
      name: "Tony Stark",
      qty_wire: 9000,
      part_number: "14NO35",
      dollar_amount_sold: 0.13031,
      region: "West"
    },
    {
      name: "Luke Skywalker",
      qty_wire: 4000,
      part_number: "14NO35",
      dollar_amount_sold: 0.13031,
      region: "West"
    },
    {
      name: "James Kirk",
      qty_wire: 5000,
      part_number: "14NO35",
      dollar_amount_sold: 0.13031,
      region: "West"
    }]
  }]
}]

  addDashboard = new Subject<void>();

  constructor(private dashboardItemService: DashboardItemService, private http: HttpClient) {}

  getDashNames(index: number) {
    return this.dashboards[index].name;
  }

  getSalesmen() {
    return this.salesmen.slice();
  }

  getDashboardItems() {
    return this.dashboardItems.slice();
  }

  getDashboardItem(index: number) {
    return this.dashboardItems[index];
  }

  getDashboards() {
    return this.dashboards.slice();
  }

  createDashboard(name: string) {
    const newDash: Dashboard = {
      name: name,
      items: [],
    };
    this.dashboards.push(newDash);
    this.dashboardsChanged.next(this.dashboards.slice());
  }

  deleteDashboard(index: number) {
    if (index !== -1) {
      this.dashboards.splice(index, 1);
      this.deleteDash.next(this.dashboards[index]);
      this.dashboardsChanged.next(this.dashboards.slice());
    }
  }

  getName(index: number) {
    return this.dashboards[index].name;
  }

  getDashboard(index: number) {
    return this.dashboards.slice()[index];
  }

  getDashItem(index: number) {
    return this.dashboardItems[index];
  }

  addDashItem(dashItem: DashboardItem) {
    this.dashboards[this.currDashIdx].items.push(dashItem);
  }

  deleteDashItem(currItemIdx: number) {
    this.dashboards[this.currDashIdx].items.splice(currItemIdx, 1);
  }

  getCustomDashboards() {
    return this.http.get<Dashboard[]>('http://localhost:3000/api/v1/custom_dashboards/index').subscribe(res => {
      console.log(res)
      // this.setDashboards(res)
    })
  }

  setDashboards(res: Dashboard[]) {
    this.dashboards = res;
    this.dashboardsChanged.next(this.dashboards.slice());
  }
}
