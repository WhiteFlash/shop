import { IProduct } from "src/app/shared/model/shop.model";

export interface ProductState {
    products: IProduct[];
    selectedProduct: IProduct | null;
}

export const initialProductState: ProductState = {
    products: [],
    selectedProduct: null,
}



