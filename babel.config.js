module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",

      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "react-native-sqlite-storage": "react-native-quick-sqlite",
            "~/assets": "./src/assets/",
            "~/contexts": "./src/contexts/",
            "~/components": "./src/components/",
            "~/constants": "./src/constants/",
            "~/external": "./src/external/",
            "~/features": "./src/features/",
            "~/store": "./src/store/",
            "~/services": "./src/services/",
            "~/theme": "./src/theme/",
            "~/hooks": "./src/hooks/",
            "~/utils": "./src/utils/",
          },
        },
      ],

      "react-native-reanimated/plugin",
    ],
  };
};
