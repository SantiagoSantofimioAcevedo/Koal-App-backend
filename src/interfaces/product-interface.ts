export interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
    expirationDate : Date
  }
  