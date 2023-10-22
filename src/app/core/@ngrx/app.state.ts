import { ProductState } from "./product/product.state";

export const productFeatureKey = 'products';
export interface AppState {
    [productFeatureKey]: ProductState
}