module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "module:react-native-dotenv",
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [".tsx", ".ts"],
        alias: {
          src: "./src",
        },
      },
    ],
  ],
};
