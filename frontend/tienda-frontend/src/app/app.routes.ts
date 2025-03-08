import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./productos/producto.routes').then(m => m.PRODUCT_ROUTES)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'producto',
        loadChildren: () => import('./productos/producto.routes').then(m => m.PRODUCT_ROUTES)
    }
];
