import InView from "react-native-component-inview";

import { useCategories } from "~/store/categories";
import { Text, View } from "moti";

import { ProductCard } from "../ProductCard";

import { useMemo } from "react";
import { useFetchProduct } from "../../hooks/useFetchProduct";

import * as S from "./styles";

type Props = { index: number };

export function SectionContent({ index }: Props) {
  const products = useFetchProduct(index);

  const categories = useCategories((state) => state.categories);
  const category = useMemo(
    () => categories.find((category) => category.id === index),
    [categories]
  );

  const changeFilter = useCategories((state) => state.changeFilter);
  const delay = (index + 1) * 100;

  return (
    <InView
      removeClippedSubviews={false}
      onChange={(isVisible) => {
        if (isVisible) changeFilter(index);
      }}
    >
      <S.Container transition={{ type: "timing", delay }}>
        <S.Title>{category?.name}</S.Title>

        <S.ProductList
          data={products}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item, index: itemIndex }) => (
            <ProductCard product={item} index={itemIndex} />
          )}
        />
      </S.Container>
    </InView>
  );
}
