import React, { ComponentProps } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import theme, { Box } from "../../../../components/Theme";

interface InputProps extends TextInputProps {
  icon: ComponentProps<typeof Icon>["name"];
}

const SIZE = theme.borderRadii.m * 2;

function Input({ icon, ...props }: InputProps): JSX.Element | null {
  const reColor = "textBody";
  const color = theme.colors[reColor];

  return (
    <Box
      flexDirection="row"
      height={48}
      borderColor={reColor}
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      padding="s"
      alignItems="center">
      <Box padding="s">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="#15162480"
          {...props}
        />
      </Box>
      {false && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={true ? "primary" : "danger"}>
          <Icon name={true ? "check-circle" : "x"} size={16} color="white" />
        </Box>
      )}
    </Box>
  );
}
export default Input;
