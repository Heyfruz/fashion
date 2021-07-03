import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}

function Button({ variant, label, onPress }: ButtonProps): JSX.Element | null {
  const backgroundColor = variant === "primary" ? "#2CB9B0" : "#0C0D3420";
  const color = variant === "primary" ? "#FFFFFF" : "#0C0D34";

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}>
      <Text style={[styles.label, { color }]}>{label}</Text>
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
  label: {
    fontFamily: "SFProDisplayMedium",
    fontSize: 15,
    textAlign: "center",
  },
});

export default Button;
