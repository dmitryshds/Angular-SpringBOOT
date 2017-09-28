import { ItemDetailsService } from './item-details.service';
import { Item } from '../entities/item';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

 categoryId: number;
  errorMsg: string;
  item: Item;

  constructor(private router : Router, private itemDetailsService: ItemDetailsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params["id"]; // чтение опционального параметра
      let itemId = +params["itemId"];
      console.log("id = "+id+" itemId= "+itemId);
      this.categoryId=id;
       this.itemDetailsService 
           .getItemByCategory(id,itemId).subscribe(   
             item => this.item = item,
             errorMsg => this.errorMsg = errorMsg)
   });
 
  }

}
