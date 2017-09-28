import { Component, OnInit } from '@angular/core';
import {ItemsService} from "./items.service";
import {Page} from "../categories_items/entities/page";



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  page: Page;
  errorMessage: string;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getPage();
  }


  private getPage() {
    this.itemsService.getPage().subscribe(
      page => this.page = page,
      error => this.errorMessage = error
    );
  }

}
