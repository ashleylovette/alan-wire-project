import { Salesman } from "./salesman.model";

export class DashboardItem {
  public id: number;
  public name: string;
  public size: number;
  public display_type: number;
  public salesman_info: Salesman [];

  constructor(id: number, name: string, size: number, display_type: number, salesman_info: Salesman[]) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.display_type = display_type;
    this.salesman_info = salesman_info;
  }

}
