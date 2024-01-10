import { View } from "moti";
import { FlatList } from "react-native";
import styled from "styled-components/native";

const INIT_STYLE = { opacity: 0 };
const IN_SCREEN_STYLE = { opacity: 1 };

export const Container = styled(View).attrs({
  from: INIT_STYLE,
  animate: IN_SCREEN_STYLE,
})`
  margin-horizontal: 25px;
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_600};
  font-size: 18px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ProductList: typeof FlatList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
