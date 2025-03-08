import { Routes } from "@angular/router";
import { ProductoComponent } from "./producto/producto.component";

export const PRODUCT_ROUTES: Routes = [
    { path: '', component: ProductoComponent },
    { path: 'producto', component: ProductoComponent }
];
