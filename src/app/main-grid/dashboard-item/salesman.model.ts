export class Salesman {
  public name: String;
  public region: String;
  public part_number: String;
  public qty_wire: number;
  public dollar_amount_sold: number;

  constructor(name: String, region: String, part_number: String, qty_wire: number, dollar_amount_sold: number) {
    this.name = name,
    this.region = region,
    this.part_number = part_number,
    this.qty_wire = qty_wire,
    this.dollar_amount_sold = dollar_amount_sold
  }
}
