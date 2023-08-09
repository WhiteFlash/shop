export enum Category {
    Laptop = "Laptop",
    Phone = "Phone",
    Car = "Car"
}

export interface IProduct {
    name: string;
    description: string
    price: number;
    isAvaliable: boolean;
    category: Category;
}