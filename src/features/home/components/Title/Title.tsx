import React from "react";

import * as S from "./styles";

export function Title() {
  return (
    <>
      <S.AnimatedText transition={{ type: "timing" }}>
        Find the best
      </S.AnimatedText>
      <S.AnimatedText transition={{ type: "timing", delay: 50 }}>
        coffee for you
      </S.AnimatedText>
    </>
  );
}
