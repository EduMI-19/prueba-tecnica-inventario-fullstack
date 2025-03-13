import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";


export const SHARED_ROUTES: Routes = [
    { 
        path: '', 
        component: DashboardComponent,
        loadChildren: () => import('../productos/producto.routes').then(m => m.PRODUCT_ROUTES)
        
    },

];