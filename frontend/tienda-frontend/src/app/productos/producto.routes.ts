import { Routes } from "@angular/router";
import { ProductoComponent } from "./producto/producto.component";
import { DashboardComponent } from "../shared/components/dashboard/dashboard.component";

export const PRODUCT_ROUTES: Routes = [
    { path: 'producto', component: ProductoComponent }
];
