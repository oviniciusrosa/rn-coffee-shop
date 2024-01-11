import { LinearGradient } from "expo-linear-gradient";
import { View } from "moti";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const INIT_STYLE = { opacity: 0, transform: [{ translateX: 30 }] };
const IN_SCREEN_STYLE = { opacity: 1, transform: [{ translateX: 0 }] };

export const Container: typeof View = styled(View).attrs({
  from: INIT_STYLE,
  animate: IN_SCREEN_STYLE,
})`
  height: 290px;
  width: 160px;

  margin-right: 22px;
  margin-bottom: 20px;
`;

export const Background: typeof LinearGradient = styled(LinearGradient)`
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 100%;

  padding: 12px;
  border-radius: 23px;
`;

export const Content = styled.View``;

export const ImageWrapper = styled.View`
  position: relative;

  width: 100%;
  height: 136px;
`;

export const ProductImageContainer = styled.View`
  position: relative;
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;

  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 11px;

  width: 100%;
  height: 100%;
`;

export const ProductImage: typeof Image = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 11px;
`;

export const Rate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_600};
  color: ${({ theme }) => theme.colors.white};
  font-size: 10px;
`;

export const RateContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;

  flex-direction: row;
  gap: 4px;

  background-color: rgba(0, 0, 0, 0.65);
  padding: 5px 10px;

  border-top-right-radius: 11px;
  border-bottom-left-radius: 11px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_400};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;

  margin-top: 12px;
  margin-bottom: 5px;
`;

export const SmallDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_400};
  color: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  opacity: 0.8;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* margin-top: 20px; */
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_600};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
`;

export const PriceSymbol = styled(Price)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const PressableContainer: typeof TouchableOpacity = styled.TouchableOpacity.attrs(
  {
    activeOpacity: 0.7,
  }
)`
  width: 30px;
  height: 30px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;
