import { ICategory } from "~/interfaces/category";

export const Categories = {
  getAll: async (): Promise<ICategory[]> => [
    { id: 0, name: "All" },
    { id: 1, name: "Cappuccino" },
    { id: 2, name: "Espresso" },
    { id: 3, name: "Americano" },
    { id: 4, name: "Macchiato" },
    { id: 5, name: "Bean" },
  ],
};
