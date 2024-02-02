export default ({ config }) => ({
  ...config,
  name: "s.Oliver",
  slug: "soliver",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  plugins: [
    [
      "expo-font",
      {
        fonts: [
          "./src/assets/fonts/Lato-Bold.ttf",
          "./src/assets/fonts/Lato-Italic.ttf",
          "./src/assets/fonts/Lato-Regular.ttf",
        ],
      },
    ],
  ],
});
