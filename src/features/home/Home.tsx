import { useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import {
  SectionContent,
  StickeableContent,
  TabOptions,
  Title,
} from "./components";
import { SafeAreaByOS } from "~/components";

import * as S from "./styles";

export function HomePage() {
  const [isHeaderSticked, setIsHeaderSticked] = useState(false);
  const headerOffset = useRef<any>(null);

  const scrollRef = useRef<ScrollView>(null);

  function onSelectOption(index) {
    scrollRef.current.scrollTo({
      animated: true,
      y: headerOffset.current + 450 * index,
    });
  }

  return (
    <>
      <SafeAreaByOS>
        <ScrollView
          ref={scrollRef}
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={({ nativeEvent }) => {
            setIsHeaderSticked(
              nativeEvent.contentOffset.y >= headerOffset.current + 80
            );
          }}
        >
          <S.Container
            onLayout={(event) => {
              const { y, height } = event.nativeEvent.layout;
              headerOffset.current = y + height;
            }}
          >
            <Title />
            {/* TODO: [ ] SEARCH BAR W/ SEARCH SCREEN */}
          </S.Container>

          <TabOptions onSelectOption={onSelectOption} />

          <SectionContent index={0} />
          <SectionContent index={1} />
          <SectionContent index={2} />
          <SectionContent index={3} />
          <SectionContent index={4} />
          <SectionContent index={5} />
        </ScrollView>
      </SafeAreaByOS>

      <StickeableContent isSticked={isHeaderSticked}>
        <TabOptions onSelectOption={onSelectOption} />
      </StickeableContent>
    </>
  );
}
