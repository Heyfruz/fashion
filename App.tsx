import "react-native-gesture-handler";
import * as React from "react";

import { AuthNavigator } from "./app/navigation";
import { LoadAssets } from "./app/components";

const fonts = {
  Playfiar: require("./app/assets/fonts/PlayfairDisplay-Bold.ttf"),
  SFProDisplayBold: require("./app/assets/fonts/SF-Pro-Display-Bold.otf"),
  SFProDisplayMedium: require("./app/assets/fonts/SF-Pro-Display-Medium.otf"),
  SFProDisplayRegular: require("./app/assets/fonts/SF-Pro-Display-Regular.otf"),
  SFProDisplaySemibold: require("./app/assets/fonts/SF-Pro-Display-Semibold.otf"),
};

export default function App(): JSX.Element {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthNavigator />
    </LoadAssets>
  );
}
