import {Injectable} from '@angular/core';
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Category} from "../entities/category";
import {Router} from "@angular/router";
import {Item} from "../entities/item";
import {Page} from "../entities/page";



let categories = [
  new Category(1,"Category 1"),
  new Category(2,"Category 2"),
  new Category(3,"Category 3"),
  new Category(4,"Category 4"),
];

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
let catsObservable = Observable.of(categories);
@Injectable()
export class CategoryService {

  private categoryUrl: string = "/categories";
  private itemsUrl : string = "/items";
  private itemsByCategoryUrl : string = "/category";


  constructor( private http: Http) {
  }


  getAllCategories() : Observable<Category[]>{
    return this.http
               .get(this.categoryUrl)
               .map(this.extractCategories)
               .catch(this.handleError);
   }


   // getAllCategories() : Observable<Category[]>{
   //  return catsObservable;
   //  }
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

  private extractCategories(response: Response) {
    let res = response.json();
    let categories: Category[] = [];
    for (let i = 0; i < res.length; i++) {
      categories.push(new Category(res[i].id, res[i].name));
    }
    return categories;
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

  getPageByCategoryId(id: number) : Observable<Page>{
    const url = `${this.itemsByCategoryUrl}/${id}`;
    return this.http
               .get(url)
               .map(this.extractPage)
               .catch(this.handleError);
  }

   private extractPage(response: Response) {
    let res = response.json();

       let items: Item[] =[];
       let content = res.content;

    for (let i = 0; i < content.length; i++) {

      items.push( new Item(content[i].id, content[i].name,content[i].descr,content[i].pictures, content[i].price));
    }
    return new Page(items, res.last, res.totalElements, res.totalPages, res.size, res.number, res.sort, res.first, res.numberOfElements);
  }









}
