import theme from "~/theme";
import { Dot } from "./Dot";

import * as S from "./styles";
import { useCategories } from "~/store/categories";

const { primary, grey_60 } = theme.colors;

const INIT_STYLE = { opacity: 0, transform: [{ translateY: 10 }] };
const IN_SCREEN_STYLE = { opacity: 1, transform: [{ translateY: 0 }] };

export function Option({ item, onSelectOption }) {
  const filteringBy = useCategories((state) => state.filteringBy);
  const changeFilter = useCategories((state) => state.changeFilter);

  const imSelected = filteringBy === item.id;

  function selectThisOption() {
    changeFilter(item.id);
    onSelectOption(item.id);
  }

  return (
    <S.Pressable onPress={selectThisOption}>
      <S.OptionLabel
        transition={{ type: "timing", delay: item.id * 50 }}
        from={INIT_STYLE}
        animate={
          {
            ...IN_SCREEN_STYLE,
            color: imSelected ? primary : grey_60,
          } as any
        }
      >
        {item.name}
      </S.OptionLabel>
      {imSelected && <Dot />}
    </S.Pressable>
  );
}
