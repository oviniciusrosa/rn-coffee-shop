import { Text } from "react-native";
import React from "react";
import { MotiView } from "moti";

export function Title() {
  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "timing" }}
    >
      <Text>Titulo</Text>
    </MotiView>
  );
}
