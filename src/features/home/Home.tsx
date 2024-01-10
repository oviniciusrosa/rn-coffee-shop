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
import { View } from "react-native";

const HEADER_HEIGHT = 80;

export function HomePage() {
  const [isHeaderSticked, setIsHeaderSticked] = useState(false);
  const headerOffset = useRef<any>(null);

  const scrollRef = useRef<ScrollView>(null);

  function onSelectOption(index) {
    let scrollTo = 0;

    if (index !== 0) {
      scrollTo = headerOffset.current + 350 * index;
    }

    scrollRef.current.scrollTo({
      animated: true,
      y: scrollTo,
    });
  }

  function scrollInterceptor({ isScrollUp = false }) {
    return ({ nativeEvent }) => {
      const calcHeaderHeight = isScrollUp
        ? headerOffset.current - HEADER_HEIGHT
        : headerOffset.current + HEADER_HEIGHT;

      setIsHeaderSticked(nativeEvent.contentOffset.y >= calcHeaderHeight);
    };
  }

  return (
    <>
      <SafeAreaByOS>
        <ScrollView
          ref={scrollRef}
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={4}
          onScrollToTop={scrollInterceptor({ isScrollUp: true })}
          onScroll={scrollInterceptor({})}
        >
          <S.Container
            onLayout={(event) => {
              const { y, height } = event.nativeEvent.layout;
              headerOffset.current = y + height;
            }}
          >
            <Title />
            <View
              style={{ height: 45, backgroundColor: "#AAA", marginTop: 25 }}
            />
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
