import { View } from "moti";
import Constants from "expo-constants";

type Props = { isSticked: boolean; children: React.ReactNode };

const INITIAL_STATE = {
  opacity: 0,
  transform: [{ translateY: -10 }],
};

export function StickeableContent({ isSticked, children }: Props) {
  if (!isSticked) return <></>;

  return (
    <View
      transition={{ type: "timing", duration: 100 }}
      from={INITIAL_STATE}
      animate={{
        opacity: 1,
        transform: [{ translateY: 0 }],
      }}
      style={{
        position: "absolute",
        top: -25,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#141921",
      }}
    >
      {children}
    </View>
  );
}
