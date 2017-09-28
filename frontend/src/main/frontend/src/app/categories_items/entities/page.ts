import {Item} from "./item";

export class Page {
  public items: Item[]=[];
  public last: boolean;
  public totalElements: number;
  public totalPages: number;
  public size: number;
  public number: number;
  public sort: any;
  public first: boolean;
  public numberOfElements: number;


  constructor(items: Item[], last: boolean, totalElements: number, totalPages: number, size: number, number: number, sort: any, first: boolean, numberOfElements: number) {
    this.items = items;
    this.last = last;
    this.totalElements = totalElements;
    this.totalPages = totalPages;
    this.size = size;
    this.number = number;
    this.sort = sort;
    this.first = first;
    this.numberOfElements = numberOfElements;
  }

  getItems() {
    return this.items;
  }

}
