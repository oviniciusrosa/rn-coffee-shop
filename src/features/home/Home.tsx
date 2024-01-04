import { Title } from "./components";
import { SafeAreaByOS } from "~/components";

import * as S from "./styles";

export function HomePage() {
  return (
    <SafeAreaByOS>
      <S.Container>
        <Title />
      </S.Container>
    </SafeAreaByOS>
  );
}
