/* eslint-disable no-undef */
import React from "react";
import {StyleSheet} from "react-native";
import CustomButton from "../customButton";

const SocialBtn = () => {
  const onSignInFacebook = () => {
    console.warn("onSignInFacebook");
  };

  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  };

  const onSignInApple = () => {
    console.warn("onSignInApple");
  };

  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />

      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />

      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});

export default SocialBtn;
