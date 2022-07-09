import { DashboardItem } from './dashboard-item/dashboard-item.model';

export class Dashboard {
  public name: string;
  public id?: number;
  public items?: DashboardItem[];

  constructor(id: number, name: string, items?: []) {
    this.id = id;
    this.name = name;
    this.items = items;
  }
}
