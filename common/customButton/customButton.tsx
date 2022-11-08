/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, Pressable} from "react-native";
import React from "react";

type BottonProp = {
  onPress?: () => void;
  text?: string;
  type?: string;
  bgColor?: string;
  fgColor?: string;
  wdSize?: string;
};

const customButton = ({
  onPress,
  text,
  bgColor,
  fgColor,
  wdSize,
}: BottonProp) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        bgColor ? {backgroundColor: bgColor} : {},
        wdSize ? {width: wdSize} : {},
      ]}
    >
      <Text style={[styles.text, fgColor ? {color: fgColor} : {}]}>{text}</Text>
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
  text: {
    fontWeight: "bold",
    color: "white",
  },
});

export default customButton;
