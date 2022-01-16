import { DashboardItem } from './dashboard-item/dashboard-item.model';

export class Dashboard {
  public name: string;
  public items?: DashboardItem[];

  constructor(name: string, items?: []) {
    this.name = name;
    this.items = items;
  }
}
