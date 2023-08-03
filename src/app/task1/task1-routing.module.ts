import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
    {
        component: FirstComponent,
        path: 'task1/first',
    },
    {
        component: ProductListComponent,
        path: 'task1/second'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class Task1RoutingModule { }