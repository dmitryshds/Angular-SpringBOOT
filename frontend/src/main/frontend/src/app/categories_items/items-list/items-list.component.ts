import { Category } from '../entities/category';
import { ItemsListService } from './items-list.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Page } from '../entities/page';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  /* ngOnDestroy(): void {
    this.subscription.unsubscribe();
  } */

  private id: number;
  page: Page;
  
   errorMsg: string;
  //  private subscription: Subscription;

/*    selectedId: number; */
 
  constructor(private router : Router, private ItemsListService : ItemsListService,  private activatedRoute: ActivatedRoute) {
    // this.subscription = activatedRoute.params.subscribe(params=>this.id=params['id']);
   }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
     let selectedId = +params["id"]; // чтение опционального параметра
     console.log(""+selectedId);
     this.id=selectedId;
      this.ItemsListService 
          .getPageByCategoryId(selectedId).subscribe(   
            page => this.page = page,
            errorMsg => this.errorMsg = errorMsg)
  });

    /* this.ItemsListService.getPage().subscribe(
      page => this.page = page,
      errorMsg => this.errorMsg = errorMsg
    ); */
  }

/* 
  isSelected(category: Category) {
    return category.id == this.selectedId;
} */

/* onSelect(selected: Category) {
  // При клике по элементу списка перенаправляем пользователя по адресу /phrases/id
  // адрес с обязательным параметром указан в настройках маршрутизации в файле app.routes.ts 
  this.router.navigate(["/phrases", selected.id]);
} */
}
