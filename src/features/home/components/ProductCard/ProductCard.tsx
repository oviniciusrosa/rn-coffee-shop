import { IProduct } from "~/interfaces/product";

import AntIcon from "@expo/vector-icons/AntDesign";
import EntypoIcon from "@expo/vector-icons/Entypo";

import * as S from "./styled";
import theme from "~/theme";
import { useState } from "react";
import { ActivityIndicator } from "react-native";

type Props = { product: IProduct; index: number };
const MAX_DESC_LENGTH: number = 20;

export function ProductCard({ product, index }: Props) {
  const smallDescription = (() => {
    if (product.description.length <= MAX_DESC_LENGTH) {
      return product.description;
    }

    const parsedDesc = product.description.substring(0, MAX_DESC_LENGTH);
    return `${parsedDesc}...`;
  })();

  return (
    <S.Container
      transition={{ type: "timing", delay: (index + 1) * 200, duration: 200 }}
    >
      <S.Background
        colors={["#252A32", "#252A32", "rgba(0, 0, 0, 0.00)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <S.Content>
          <S.ImageWrapper>
            <ProductImage imageUrl={product.imageUrl} />

            <S.RateContainer>
              <AntIcon name="star" size={12} color={theme.colors.primary} />
              <S.Rate>{product.rate}</S.Rate>
            </S.RateContainer>
          </S.ImageWrapper>

          <S.Name>{product.name}</S.Name>
          <S.SmallDescription>{smallDescription}</S.SmallDescription>
        </S.Content>

        <S.Footer>
          <S.PriceContainer>
            <S.PriceSymbol>$</S.PriceSymbol>
            <S.Price>{product.price}</S.Price>
          </S.PriceContainer>

          <S.PressableContainer>
            <EntypoIcon name="plus" size={18} color={theme.colors.white} />
          </S.PressableContainer>
        </S.Footer>
      </S.Background>
    </S.Container>
  );
}

function ProductImage({ imageUrl }) {
  const [loading, setLoading] = useState(false);

  return (
    <S.ProductImageContainer>
      <S.ProductImage
        source={{ uri: imageUrl }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && (
        <S.LoadingContainer>
          <ActivityIndicator />
        </S.LoadingContainer>
      )}
    </S.ProductImageContainer>
  );
}
