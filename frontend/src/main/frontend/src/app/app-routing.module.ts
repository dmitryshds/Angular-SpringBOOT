
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { CategoryListComponent } from "./categories_items/category-list/category-list.component";



@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "index",
            pathMatch: "full"
        },
        { path: "index", component: CategoryListComponent },
    ])],
    exports: [RouterModule] 
})
export class AppRoutingModule { }