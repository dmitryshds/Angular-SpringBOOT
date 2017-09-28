export class Item {
  public itemId: number;
  public name: string;
  public descr: string;
  public pictures: string;
  public price: number;

  constructor(itemId, name, descr, pictures, price) {
    this.itemId = itemId;
    this.name = name;
    this.descr = descr;
    this.pictures = pictures;
    this.price = price;
  }
}
