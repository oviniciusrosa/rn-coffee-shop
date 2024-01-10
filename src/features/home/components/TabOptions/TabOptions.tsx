import { EmptyBox } from "~/components";
import { Option } from "./Option";
import { useTabOptions } from "../../hooks/useTabOptions";

import * as S from "./styles";

interface Props {
  onSelectOption: (index: number) => void;
}

export function TabOptions({ onSelectOption }: Props) {
  const { listRef, categories } = useTabOptions();

  return (
    <S.TabOptionsList
      ref={listRef}
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <EmptyBox width={20} />}
      contentContainerStyle={{ paddingHorizontal: 25 }}
      renderItem={({ item }) => (
        <Option item={item} onSelectOption={onSelectOption} />
      )}
      /// Overrides Scroll Failure
      onScrollToIndexFailed={(info) => null}
    />
  );
}
