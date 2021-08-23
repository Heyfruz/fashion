import React from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";

import theme, { Box } from "./Theme";

export const assets = [require("./assets/patterns/1.png")];
const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: React.ReactNode;
  footer: React.ReactNode;
}

function Container({ children, footer }: ContainerProps): JSX.Element | null {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}>
      <Box flex={1} backgroundColor="secondary">
        <StatusBar barStyle="light-content" />
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}>
            <Image
              source={assets[0]}
              style={{
                borderBottomLeftRadius: theme.borderRadii.xl,
                height,
                width,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={assets[0]}
            style={{
              ...StyleSheet.absoluteFillObject,
              height,
              top: -height * 0.61,
              width,
            }}
          />
          <Box
            borderTopLeftRadius={0}
            borderRadius="xl"
            backgroundColor="white"
            flex={1}>
            {children}
          </Box>
        </Box>
        <Box paddingTop="m">
          {footer}
          <Box height={30} />
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
}

export default Container;
