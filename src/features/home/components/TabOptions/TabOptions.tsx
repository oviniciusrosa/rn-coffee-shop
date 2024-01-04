import { EmptyBox } from "~/components";
import { Option } from "./Option";

import * as S from "./styles";
import { useTabOptions } from "./useTabOptions";

export function TabOptions() {
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
      renderItem={({ item }) => <Option item={item} />}
    />
  );
}
