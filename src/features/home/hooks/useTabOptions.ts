import { useEffect, useRef } from "react";
import { FlatList } from "react-native";

import { Categories } from "~/services/categories";
import { useCategories } from "~/store/categories";

export function useTabOptions() {
  const listRef = useRef<FlatList>(null);

  const filteringBy = useCategories((state) => state.filteringBy);
  const categories = useCategories((state) => state.categories);
  const addCategories = useCategories((state) => state.addCategories);

  useEffect(() => {
    Categories.getAll().then(addCategories);
  }, []);

  useEffect(() => {
    if (filteringBy !== null && listRef.current) {
      if (filteringBy === 0) {
        return listRef.current.scrollToOffset({ offset: 0, animated: true });
      }

      listRef.current.scrollToIndex({ index: filteringBy, animated: true });
    }
  }, [filteringBy]);

  return { listRef, categories };
}
