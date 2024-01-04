import { TabOptions, Title } from "./components";
import { SafeAreaByOS } from "~/components";

import * as S from "./styles";

export function HomePage() {
  return (
    <SafeAreaByOS>
      <S.Container>
        <Title />
        {/* TODO: [ ] SEARCH BAR W/ SEARCH SCREEN */}
      </S.Container>
      <TabOptions />
    </SafeAreaByOS>
  );
}
