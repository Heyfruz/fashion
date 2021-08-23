import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { Text } from "../../../components";

export const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;

interface SlideProps {
  title: string;
  right?: boolean;
}

function Slide({ title, right }: SlideProps): JSX.Element | null {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
});

export default Slide;
