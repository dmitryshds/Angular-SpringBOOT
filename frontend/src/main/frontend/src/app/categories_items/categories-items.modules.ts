import { ItemDetailsComponent } from './item-details/item-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { Declaration } from '@angular/language-service';
import { CategoryRoutingModule } from './category.routing.module';

import { Component, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        CategoryRoutingModule // настройки маршрутизации для модуля PhrasesModule
    ],
    declarations:[
        ItemsListComponent,
        CategoryListComponent,
        ItemDetailsComponent
    ]
})

export class CategoriesItemsModule { }