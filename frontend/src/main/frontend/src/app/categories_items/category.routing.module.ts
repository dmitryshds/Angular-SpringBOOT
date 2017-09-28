import { ItemsListComponent } from './items-list/items-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "",
                redirectTo: "/category",
                pathMatch: "full"
            },
            {
                // Для того, чтобы компонент отображался в router-outlet PhraseHomeComponent, a не в AppComponent
                // необходимо выполнить настройку дочерних маршрутов с помощью инициализации свойства children
                path: "category",
                component: CategoryListComponent, // содержит <router-outlet>
                children: [
                    {
                        path: "",
                        component: ItemsListComponent, // содержит <router-outlet>
                        children: [
                            {
                                path: ":id",
                                component: ItemsListComponent
                            },
                            {
                                path: "",
                                component: ItemsListComponent
                            }
                        ]
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CategoryRoutingModule { }
