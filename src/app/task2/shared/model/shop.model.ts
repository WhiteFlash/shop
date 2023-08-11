export enum Category {
    Laptop = "Laptop",
    Phone = "Phone",
    Car = "Car"
}

export interface IProduct {
    id: number;
    name: string;
    description: string
    price: number;
    isAvaliable: boolean;
    category: Category;
    inTheBasket: boolean
    quantity: number;
}