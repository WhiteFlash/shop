import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/shared/model/shop.model";

export const getProducts = createAction('[Product list (Page) GET_PRODUCTS]');

export const getProductsSuccess = createAction(
    '[Get PRODUCTS Effect] GET_PRODUCTS_SUCCEESS',
    props<{ products: IProduct[] }>()
);

export const getProductsError = createAction(
    "[Get Products Effect] GET_PRODUCTS_ERROR",
    props<{ error: Error | string | null }>()
);
export const createProduct = createAction(
    "[Create Product App] CREATE_PRODUCT",
    props<{ product: IProduct }>()
);
export const createProductSuccess = createAction(
    "[Create Product Effect] CREATE_PRODUCT_SUCCESS",
    props<{ product: IProduct }>()
);
export const updateProduct = createAction(
    "[Update Product App] UPDATE_PRODUCT",
    props<{ product: IProduct }>()
);
export const updateProductSuccess = createAction(
    "[Update Product Effect] UPDATE_PRODUCT_SUCCESS",
    props<{ product: IProduct }>()
);
export const createUpdateProductError = createAction(
    "[Create/Update Product Effect] CREATE/UPDATE_PRODUCT_ERROR",
    props<{ error: Error | string | null }>()
);
export const deleteProduct = createAction(
    "[Delete Product App] DELETE_PRODUCT",
    props<{ productId: number }>()
);
export const deleteProductSuccess = createAction(
    "[Delete Product Effect] DELETE_PRODUCT_SUCCESS",
    props<{ productId: number }>()
);
export const deleteProductError = createAction(
    "[Delete Product Effect] DELETE_PRODUCT_ERROR",
    props<{ error: Error | string | null }>()
);

export function back(): any {
    throw new Error('Function not implemented.');
}
