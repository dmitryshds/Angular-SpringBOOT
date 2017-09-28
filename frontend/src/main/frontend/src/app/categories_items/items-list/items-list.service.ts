import { Observable } from 'rxjs/Rx';
import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Item } from '../entities/item';
import { Page } from '../entities/page';


let items = [
  new Item(1,"Item 1","Descr 1","",42.15),
  new Item(2,"Item 2","Descr 1","",32.15),
  new Item(3,"Item 3","Descr 3","",342.15),
  new Item(4,"Item 4","Descr 4","",442.15),
  new Item(4,"Item 4","Descr 4","",442.15),
  new Item(4,"Item 4","Descr 4","",442.15),
  new Item(4,"Item 4","Descr 4","",442.15),
  new Item(4,"Item 4","Descr 4","",442.15),
  new Item(4,"Item 4","Descr 4","",442.15),
  new Item(4,"Item 4","Descr 4","",442.15),
  new Item(4,"Item 4","Descr 4","",442.15),
  new Item(4,"Item 4","Descr 4","",442.15),
  new Item(4,"Item 4","Descr 4","",442.15),
  new Item(4,"Item 4","Descr 4","",442.15),
  new Item(4,"Item 4","Descr 4","",442.15),
  new Item(4,"Item 4","Descr 4","",442.15)
];
let page = new Page(items,true,4,1,1,1,"any",true,4);

let pagesObservable = Observable.of(page);

@Injectable()
export class ItemsListService {

  private itemsUrl : string = "/items";
  private itemsByCategoryUrl : string = "/category";

  constructor(private http: Http) { }

getPage() : Observable<Page>{

  return this.http
              .get(this.itemsUrl)
               .map(this.extractPage)
               .catch(this.handleError);
  }
  // getPage() : Observable<Page>{
  //
  //       return pagesObservable;
  // }


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

   getPageByCategoryId(id: number) : Observable<Page>{
    const url = `${this.itemsByCategoryUrl}/${id}`;
    return this.http
               .get(url)
               .map(this.extractPage)
               .catch(this.handleError);
  }
  // getPageByCategoryId(id: number) : Observable<Page>{
  //   console.log("get page by cat "+id);
  //     return pagesObservable;
  // }


   private extractPage(response: Response) {
    let res = response.json();

       let items: Item[] =[];
       let content = res.content;

    for (let i = 0; i < content.length; i++) {

      items.push( new Item(content[i].itemId, content[i].name,content[i].descr,content[i].pictures, content[i].price));
    }
    return new Page(items, res.last, res.totalElements, res.totalPages, res.size, res.number, res.sort, res.first, res.numberOfElements);
  }

}
