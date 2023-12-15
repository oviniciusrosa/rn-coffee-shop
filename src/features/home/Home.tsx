import { SafeAreaView } from "react-native";

import * as S from "./styles";
import { Title } from "./components";

export function HomePage() {
  return (
    <SafeAreaView>
      <S.Container>
        <Title />
      </S.Container>
    </SafeAreaView>
  );
}
