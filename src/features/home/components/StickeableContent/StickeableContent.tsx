import { View } from "moti";
import Constants from "expo-constants";

type Props = { isSticked: boolean; children: React.ReactNode };

export function StickeableContent({ isSticked, children }: Props) {
  return (
    <View
      transition={{ type: "timing", duration: 150 }}
      animate={{
        position: "absolute",
        top: -25,
        paddingTop: Constants.statusBarHeight,
        opacity: isSticked ? 1 : 0,
        transform: [{ translateY: isSticked ? 0 : -10 }],
        backgroundColor: "#141921",
      }}
    >
      {children}
    </View>
  );
}
