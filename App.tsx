import "react-native-gesture-handler";
import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthNavigator } from "./app/navigation";
import { LoadAssets, theme } from "./app/components";
import { assets as authenticationAssets } from "./app/screens/Authentication";

const fonts = {
  Playfiar: require("./app/assets/fonts/PlayfairDisplay-Bold.ttf"),
  SFProDisplayBold: require("./app/assets/fonts/SF-Pro-Display-Bold.otf"),
  SFProDisplayMedium: require("./app/assets/fonts/SF-Pro-Display-Medium.otf"),
  SFProDisplayRegular: require("./app/assets/fonts/SF-Pro-Display-Regular.otf"),
  SFProDisplaySemibold: require("./app/assets/fonts/SF-Pro-Display-Semibold.otf"),
};

const assets = [...authenticationAssets];

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ assets, fonts }}>
        <SafeAreaProvider>
          <AuthNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
