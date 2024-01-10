import { useEffect, useState } from "react";
import { IProduct } from "~/interfaces/product";
import { Products } from "~/services/products";

export function useFetchProduct(categoryId: number) {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    Products.getByCategory(categoryId).then(setProducts);
  }, []);

  return products;
}
