import InView from "react-native-component-inview";

import { useCategories } from "~/store/categories";

import * as S from "./styles";
import { View } from "react-native";

interface Props {
  index;
}

export function SectionContent({ index }) {
  const changeFilter = useCategories((state) => state.changeFilter);

  return (
    <InView
      removeClippedSubviews={false}
      onChange={(isVisible) => {
        if (isVisible) changeFilter(index);
      }}
    >
      <View
        style={{
          height: 400,
          backgroundColor: index % 2 === 0 ? "pink" : "cyan",
          margin: 25,
        }}
      />
    </InView>
  );
}
