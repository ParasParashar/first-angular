import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { AddProductPageComponent } from './components/add-product-page/add-product-page.component';
import { EditProductPageComponent } from './components/edit-product-page/edit-product-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'product/:id',
        component: ProductPageComponent
    },
    {
        path: 'add',
        component: AddProductPageComponent
    },
    {
        path: 'edit/:id',
        component: EditProductPageComponent
    }
];
