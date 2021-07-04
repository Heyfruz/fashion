import React from "react";
import { StyleSheet, View } from "react-native";

function Welcome(): JSX.Element | null {
  return (
    <View style={styles.container}>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Welcome;
