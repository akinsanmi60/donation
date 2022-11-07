/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, Pressable} from "react-native";
import React from "react";

type BottonProp = {
  onPress: () => void;
  text: string;
  type: string;
  bgColor: string;
  fgColor: string;
};

const customButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}: BottonProp) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    padding: 15,
    marginVertical: 6,

    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: "#009CDE",
  },

  container_SECONDARY: {
    borderColor: "#3B71F3",
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: "bold",
    color: "white",
  },

  text_SECONDARY: {
    color: "#3B71F3",
  },

  text_TERTIARY: {
    color: "gray",
  },
});

export default customButton;
