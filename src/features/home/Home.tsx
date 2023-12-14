import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

import * as S from "./styles";
import { Title } from "./components";

export function HomePage() {
  return (
    <S.Container>
      <Text>Hello, Renato Nativo</Text>
      <Title />

      <StatusBar style="auto" />
    </S.Container>
  );
}
