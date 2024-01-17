import { useRef } from "react";

import { VirtualizedList } from "react-native";
import { Search, SectionContent, TabOptions, Title } from "./components";
import { SafeAreaByOS } from "~/components";

import * as S from "./styles";

export function HomePage() {
  const scrollRef = useRef<VirtualizedList<any>>(null);

  function onSelectOption(index) {
    if (index === 0) {
      return scrollRef.current.scrollToOffset({ offset: 0, animated: true });
    }

    scrollRef.current.scrollToIndex({
      index: index + 1,
      animated: true,
      viewOffset: 50,
    });
  }

  return (
    <>
      <SafeAreaByOS>
        <VirtualizedList
          ref={scrollRef}
          initialNumToRender={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <S.Container>
              <Title />
              <Search />
            </S.Container>
          }
          stickyHeaderIndices={[1]}
          renderItem={({ index }) => {
            if (index === 0)
              return <TabOptions onSelectOption={onSelectOption} />;

            return <SectionContent index={index - 1} />;
          }}
          keyExtractor={(item) => item.toString()}
          getItemCount={() => 7}
          getItem={(_, index) => index}
        />
      </SafeAreaByOS>
    </>
  );
}
