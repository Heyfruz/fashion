import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolateNode,
} from "react-native-reanimated";

interface PaginatorProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

function Paginator({ index, currentIndex }: PaginatorProps): JSX.Element {
  const opacity = interpolateNode(currentIndex, {
    extrapolate: Extrapolate.CLAMP,
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
  });

  const scale = interpolateNode(currentIndex, {
    extrapolate: Extrapolate.CLAMP,
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
  });

  return (
    <Animated.View
      style={[styles.container, { opacity, transform: [{ scale }] }]}>
      <View />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2CB9B0",
    borderRadius: 4,
    height: 8,
    margin: 4,
    width: 8,
  },
});

export default Paginator;
