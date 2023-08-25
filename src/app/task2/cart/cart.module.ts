import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { YesNoPipe } from "../shared/pipes/yes-no.pipe";
import { HighlightDirective } from '../shared/directives/highlight.directive';

@NgModule({
    imports: [
        CommonModule,
        YesNoPipe,
        CartListComponent,
        CartItemComponent
    ],
    providers: [
        HighlightDirective
    ]
})
export class CartModule { }
