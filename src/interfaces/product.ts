import { ICategory } from "./category";

export type ProductType = "Small" | "Medium" | "Large";

export interface IProduct {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  rate: number;
  size: ProductType;
  category: ICategory;
}
