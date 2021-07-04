import React, { useRef } from "react";
import { ColorValue, Dimensions, StyleSheet, View } from "react-native";
import Animated, { divide, multiply } from "react-native-reanimated";
import {
  interpolateColor,
  useScrollHandler,
} from "react-native-redash/lib/module/v1";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Paginator from "./Paginator";

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

const slides = [
  {
    color: "#BBAC99",
    description:
      "Confused about your outfit? Don’t worry! Find the best outfit here!",
    picture: require("./images/1.jpg"),
    subtitle: "Find Your Outfits",
    title: "Relaxed",
  },
  {
    color: "#D3C7D3",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    picture: require("./images/2.jpg"),
    subtitle: "Hear it First, Wear it First",
    title: "Playful",
  },
  {
    color: "#1A1B1D",
    description:
      " Create your individual & unique style and look amazing everyday",
    picture: require("./images/3.jpg"),
    subtitle: "Your Style, Your Way",
    title: "Eccentric",
  },
  {
    color: "#0D0C1E",
    description:
      "Discover the latest trends in fashion and explore your personality",
    picture: require("./images/4.jpg"),
    subtitle: "Look Good, Feel Good",
    title: "Funky",
  },
];

function Onboarding(): JSX.Element {
  const scroll = useRef(null);
  const { scrollHandler, x } = useScrollHandler();
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
          {...scrollHandler}>
          {slides.map(({ title, picture }, index) => (
            <Slide
              key={index}
              {...{ title }}
              {...{ picture }}
              right={!!(index % 2)}
            />
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
        <View style={[styles.footerContent]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Paginator
                key={index}
                currentIndex={divide(x, width)}
                {...{ index, x }}
              />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              transform: [{ translateX: multiply(x, -1) }],
              width: width * slides.length,
            }}>
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
    borderTopLeftRadius: BORDER_RADIUS,
    flex: 1,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    flexDirection: "row",
    height: BORDER_RADIUS,
    justifyContent: "center",
  },
  slider: {
    borderBottomRightRadius: BORDER_RADIUS,
    height: SLIDE_HEIGHT,
    overflow: "hidden",
  },
});

export default Onboarding;
