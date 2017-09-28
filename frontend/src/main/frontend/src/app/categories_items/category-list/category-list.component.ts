import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {CategoryService} from "./category.service";
import {Category} from "../entities/category";
import {Router} from "@angular/router";
import {Page} from "../entities/page";

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category: Category[];
  page: Page;
 
  errorMsg: string;


  constructor(private router : Router, private categoryService : CategoryService) {}

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(
      category => this.category = category,
      error => this.errorMsg = error
    );
    /* this.categoryService.getPage().subscribe(
      page => this.page = page,
      errorMsg => this.errorMsg = errorMsg
    ); */

  }

  onSelect(category : Category){

    this.router.navigate(["category",category.id]);

  }

    
}
