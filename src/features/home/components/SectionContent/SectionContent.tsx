import { Dimensions } from "react-native";

import { useMemo } from "react";
import { useCategories } from "~/store/categories";
import { useFetchProduct } from "../../hooks/useFetchProduct";

import { ProductCard } from "../ProductCard";
import InView from "react-native-component-inview";

import * as S from "./styles";

const WINDOW_WIDTH = Dimensions.get("window").width;

type Props = { index: number };

export function SectionContent({ index }: Props) {
  const products = useFetchProduct(index);

  const categories = useCategories((state) => state.categories);
  const category = useMemo(
    () => categories.find((category) => category.id === index),
    [categories]
  );

  const changeFilter = useCategories((state) => state.changeFilter);

  return (
    <InView
      removeClippedSubviews={false}
      onChange={(isVisible) => {
        if (isVisible) changeFilter(index);
      }}
    >
      <S.Container transition={{ type: "timing", delay: 200 * (index + 1) }}>
        <S.Title>{category?.name}</S.Title>

        <S.ProductList
          data={products}
          windowSize={WINDOW_WIDTH}
          removeClippedSubviews
          initialNumToRender={3}
          maxToRenderPerBatch={5}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item, index: itemIndex }) => (
            <ProductCard product={item} index={itemIndex} />
          )}
        />
      </S.Container>
    </InView>
  );
}
