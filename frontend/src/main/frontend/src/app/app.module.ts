
import { ItemsListService } from './categories_items/items-list/items-list.service';
import { CategoriesItemsModule } from './categories_items/categories-items.modules';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import { CategoryService } from './categories_items/category-list/category.service';
import { CategoryListComponent } from './categories_items/category-list/category-list.component';
import { CategoryRoutingModule } from './categories_items/category.routing.module';
import { ItemsListComponent } from './categories_items/items-list/items-list.component';
import { ItemDetailsComponent } from './categories_items/item-details/item-details.component';
import { ItemDetailsService } from './categories_items/item-details/item-details.service';


const appRoutes: Routes =[
  { path: '',  redirectTo: "index",  pathMatch: "full"},
  // { path: 'index', component: CategoryListComponent},
  {path: 'category/:id/item/:itemId', pathMatch: "full", component: ItemDetailsComponent},
  { path: 'category/:id', component: ItemsListComponent}
];

@NgModule({
  declarations: [
    CategoryListComponent,
    ItemsListComponent,
    ItemDetailsComponent
    
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ CategoryService,ItemsListService,ItemDetailsService],
  bootstrap: [CategoryListComponent]
})
export class AppModule { }
