import React from "react";
import { StyleSheet, View } from "react-native";

import { Button, Text } from "../../../components";

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
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
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
    marginBottom: 40,
    textAlign: "center",
  },
  subtitle: {
    marginBottom: 12,
  },
});

export default Subslide;
