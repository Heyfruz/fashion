import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "../../../components";

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

function Subslide({
  description,
  subtitle,
  last,
  onPress,
}: SubslideProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 35,
  },
  description: {
    color: "#0C0D34",
    fontFamily: "SFProDisplayRegular",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 40,
    textAlign: "center",
  },
  subtitle: {
    color: "#0C0D34",
    fontFamily: "SFProDisplaySemibold",
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    textAlign: "center",
  },
});

export default Subslide;
