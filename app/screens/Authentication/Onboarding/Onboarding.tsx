import React, { useRef } from "react";
import { ColorValue, Dimensions, StyleSheet, View } from "react-native";
import Animated, { multiply } from "react-native-reanimated";
import {
  interpolateColor,
  onScrollEvent,
  useValue,
} from "react-native-redash/lib/module/v1";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";

const { width } = Dimensions.get("window");

const slides = [
  {
    color: "#BFEAF5",
    description:
      "Confused about your outfit? Don’t worry! Find the best outfit here!",
    subtitle: "Find Your Outfits",
    title: "Relaxed",
  },
  {
    color: "#BEECC4",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    subtitle: "Hear it First, Wear it First",
    title: "Playful",
  },
  {
    color: "#FFE4D9",
    description:
      " Create your individual & unique style and look amazing everyday",
    subtitle: "Your Style, Your Way",
    title: "Eccentric",
  },
  {
    color: "#F0E5FB",
    description:
      "Discover the latest trends in fashion and explore your personality",
    subtitle: "Look Good, Feel Good",
    title: "Funky",
  },
];

function Onboarding(): JSX.Element {
  const scroll = useRef(null);
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  }) as unknown as number | ColorValue;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}>
          {slides.map(({ title }, index) => (
            <Slide key={index} {...{ title }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              transform: [{ translateX: multiply(x, -1) }],
              width: width * slides.length + 1,
            },
          ]}>
          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              last={index === slides.length - 1}
              onPress={() => {
                if (scroll.current)
                  scroll.current.scrollTo({
                    animated: true,
                    x: width * (index + 1),
                  });
              }}
              {...{ description, subtitle, x }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 75,
    flex: 1,
    flexDirection: "row",
  },
  slider: {
    borderBottomRightRadius: 75,
    height: SLIDE_HEIGHT,
  },
});

export default Onboarding;
