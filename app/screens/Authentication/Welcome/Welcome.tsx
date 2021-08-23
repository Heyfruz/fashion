import React from "react";
import { Dimensions, Image } from "react-native";

import { Button } from "../../../components";
import theme, { Box, Text } from "../../../components/Theme";
import { Routes, StackNavigationProps } from "../../../navigation/Navigation";

const picture = {
  height: 5074,
  src: require("../images/5.png"),
  width: 3383,
};

export const assets = [picture.src];

const { width } = Dimensions.get("window");

function Welcome({
  navigation,
}: StackNavigationProps<Routes, "Welcome">): JSX.Element | null {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="slideGrey"
        alignItems="center"
        justifyContent="center"
        overflow="hidden">
        <Image
          source={picture.src}
          style={[
            {
              height:
                ((width - theme.borderRadii.xl) * picture.height) /
                picture.width,
              width: width - theme.borderRadii.xl,
            },
          ]}
        />
      </Box>
      <Box flex={1}>
        <Box
          backgroundColor="slideGrey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          alignItems="center"
          padding="xl"
          justifyContent="space-evenly">
          <Text variant="title">Let’s get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
          <Button
            variant="default"
            label="Join us, it’s Free"
            onPress={() => {
              console.log("Join pressed");
            }}
          />
          <Button
            variant="transparent"
            label="Forgot password"
            onPress={() => {
              console.log("Forgot pressed");
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
export default Welcome;
