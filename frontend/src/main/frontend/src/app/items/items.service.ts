import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';

import {Page} from "../categories_items/entities/page";
import {Item} from "../categories_items/entities/item";

@Injectable()
export class ItemsService {

  private itemsUrl : string = "/items";

  constructor(private http: Http) { }

 getPage() : Observable<Page>{

    return this.http
                .get(this.itemsUrl)
                .map(this.extractPage)
                .catch(this.handleError);
  }



  // private extractPage(response: Response) {
  //   let res = response.json();
  //
  //      let items: Item[] =[];
  //
  //   for (let i = 0; i < res[0].content.length; i++) {
  //
  //     items.push( new Item(res[0].content[i].id, res[0].content[i].name,res[0].content[i].descr,res[0].content[i].pictures, res[0].content[i].price));
  //   }
  //   let page: Page = new Page(items,res[0].last,res[0].totalElements,res[0].totalPages,res[0].size,res[0].number,res[0].sort,res[0].first,res[0].numberOfElements);
  //   return page;
  // }

  private extractPage(response: Response) {
    let res = response.json();

       let items: Item[] =[];
       let content = res.content;

    for (let i = 0; i < content.length; i++) {

      items.push( new Item(content[i].id, content[i].name,content[i].descr,content[i].pictures, content[i].price));
    }
    return new Page(items, res.last, res.totalElements, res.totalPages, res.size, res.number, res.sort, res.first, res.numberOfElements);
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

}
