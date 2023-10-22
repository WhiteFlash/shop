import { createReducer, on } from "@ngrx/store";
import { initialProductState } from "./product.state";
import * as ProductsActions from "./product.actions";

export const productsReducer = createReducer(
    initialProductState,
    on(ProductsActions.getProducts, state => {
        return { ...state };
    }),
    on(ProductsActions.getProductsSuccess, state => {
        return state
    }),
    on(ProductsActions.createProductSuccess, state => state),
    on(ProductsActions.updateProductSuccess, state => state),
    on(ProductsActions.deleteProductSuccess, state => state),
);