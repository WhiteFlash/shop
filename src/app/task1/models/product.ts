// Если тут задать значение каждому идентификатору
// то может не нужно будет использовать ConverterService

export enum Category {
    Laptop,
    Phone,
    Car
}

export interface IProduct {
    name: string;
    description: string
    price: number;
    isAvaliable: boolean;
    category: Category;
}
