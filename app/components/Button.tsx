import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Text, Theme } from "./Theme";

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  label?: string;
  onPress: () => void;
  children?: React.ReactNode;
}

function Button({
  variant,
  label,
  onPress,
  children,
}: ButtonProps): JSX.Element | null {
  const theme = useTheme<Theme>();

  const backgroundColor =
    // eslint-disable-next-line no-nested-ternary
    variant === "primary"
      ? theme.colors.primary
      : variant === "transparent"
      ? "transparent"
      : theme.colors.inactive;

  const color =
    variant === "primary" ? theme.colors.white : theme.colors.button;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}>
      {children ? (
        children
      ) : (
        <Text variant={"button"} style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
}

Button.defaultProps = { variant: "default" };

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    width: 245,
  },
});

export default Button;
