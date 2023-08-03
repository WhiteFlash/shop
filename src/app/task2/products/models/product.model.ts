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