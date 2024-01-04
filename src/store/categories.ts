import { create } from "zustand";
import { ICategory } from "~/interfaces/category";

type CategoriesStore = {
  filteringBy: ICategory["id"];
  categories: ICategory[];

  changeFilter: (id: ICategory["id"]) => void;
  addCategories: (categories: ICategory[]) => void;
};

export const useCategories = create<CategoriesStore>()((set) => ({
  filteringBy: 0,
  changeFilter: (id) => set({ filteringBy: id }),

  categories: [],
  addCategories: (categories) => {
    set({ categories });
  },
}));
