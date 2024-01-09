import { PRODUCTS_DATA } from "~/data/products";
import { IProduct } from "~/interfaces/product";

export const Products = {
  getAll: async (): Promise<IProduct[]> => Promise.resolve(PRODUCTS_DATA),
  getByCategory: async (categoryId: number): Promise<IProduct[]> => {
    if (categoryId === 0) return Promise.resolve(PRODUCTS_DATA);

    return Promise.resolve(
      PRODUCTS_DATA.filter((product) => product.category.id === categoryId)
    );
  },
};
