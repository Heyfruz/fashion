import React, { useRef } from "react";
import { ColorValue, Image, StyleSheet, View } from "react-native";
import Animated, {
  Extrapolate,
  divide,
  interpolateNode,
  multiply,
} from "react-native-reanimated";
import {
  interpolateColor,
  useScrollHandler,
} from "react-native-redash/lib/module/v1";

import theme from "../../../components/Theme";
import { Routes, StackNavigationProps } from "../../../navigation/Navigation";

import Slide, { SLIDE_HEIGHT, width } from "./Slide";
import Subslide from "./Subslide";
import Paginator from "./Paginator";

const slides = [
  {
    color: "#BBAC99",
    description:
      "Confused about your outfit? Don’t worry! Find the best outfit here!",
    picture: {
      height: 3583,
      src: require("../images/1.png"),
      width: 2513,
    },
    subtitle: "Find Your Outfits",
    title: "Relaxed",
  },
  {
    color: "#D3C7D3",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    picture: {
      height: 3583,
      src: require("../images/2.png"),
      width: 2513,
    },
    subtitle: "Hear it First, Wear it First",
    title: "Playful",
  },
  {
    color: "#181617",
    description:
      " Create your individual & unique style and look amazing everyday",
    picture: {
      height: 3583,
      src: require("../images/3.png"),
      width: 2513,
    },
    subtitle: "Your Style, Your Way",
    title: "Eccentric",
  },
  {
    color: "#A67F58",
    description:
      "Discover the latest trends in fashion and explore your personality",
    picture: {
      height: 3583,
      src: require("../images/4.png"),
      width: 2513,
    },
    subtitle: "Look Good, Feel Good",
    title: "Funky",
  },
];

export const assets = slides.map(slide => slide.picture.src);

function Onboarding({
  navigation,
}: StackNavigationProps<Routes, "Onboarding">): JSX.Element {
  const scroll = useRef(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  }) as unknown as number | ColorValue;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolateNode(x, {
            extrapolate: Extrapolate.CLAMP,
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                source={picture.src}
                style={[
                  {
                    height:
                      ((width - theme.borderRadii.xl) * picture.height) /
                      picture.width,
                    width: width - theme.borderRadii.xl,
                  },
                ]}
              />
            </Animated.View>
          );
        })}
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
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;

              return (
                <Subslide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scroll.current?.scrollTo({
                        animated: true,
                        x: width * (index + 1),
                      });
                    }
                  }}
                  {...{ description, last, subtitle }}
                />
              );
            })}
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
    borderTopLeftRadius: theme.borderRadii.xl,
    flex: 1,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    flexDirection: "row",
    height: theme.borderRadii.xl,
    justifyContent: "center",
  },
  slider: {
    borderBottomRightRadius: theme.borderRadii.xl,
    height: SLIDE_HEIGHT,
    overflow: "hidden",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    borderBottomRightRadius: theme.borderRadii.xl,
    justifyContent: "flex-end",
  },
});

export default Onboarding;
