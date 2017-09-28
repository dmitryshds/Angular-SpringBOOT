import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Item } from '../entities/item';
import { Observable } from 'rxjs/Rx';

let item =  new Item(4,"Item 4","Descr 4","",442.15);
let itemObservable = Observable.of(item);



@Injectable()
export class ItemDetailsService {

  private itemsByCategoryUrl : string = "/category";

  constructor(private http: Http) { }

  getItemByCategory(id:number,itemId:number)
  {

    const url = `${this.itemsByCategoryUrl}/${id}/item/${itemId}`;


      return this.http
        .get(url)
        .map(this.extractItem)
        .catch(this.handleError);
  }

  private handleError(error: any, cought: Observable<any>): any {
    let message = "";

    if (error instanceof Response) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return Observable.throw(message);
  }


  private extractItem(response: Response) {
    let res = response.json();


       // let content = res.content;



       let item = new Item(res.itemId, res.name,res.descr,res.pictures, res.price);

    return item;
  }


}
