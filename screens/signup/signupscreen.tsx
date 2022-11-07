/* eslint-disable no-undef */
import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../common/customInput";
import CustomButton from "../../common/customButton";
import SocialBtn from "../../common/sociaButtons/socialBtn";
import {useNavigation} from "@react-navigation/core";
import {useForm} from "react-hook-form";
import {RegisterProp, RootStackParamList} from "../../types";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
type RegisterScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  "Register"
>;

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm<RegisterProp>();
  const pwdValidate = watch("password");
  const navigation = useNavigation<RegisterScreenNavigationType>();

  const onRegisterPressed = (data: RegisterProp) => {
    alert(data.firstName);
    navigation.navigate("Confirmation");
  };

  const SignInPress = () => {
    navigation.navigate("Login");
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create account</Text>

        <CustomInput
          placeholder="First Name"
          name="firstName"
          control={control}
          rules={{
            required: "Full name is reqired",
          }}
        />

        <CustomInput
          placeholder="Last Name"
          name="lastName"
          control={control}
          rules={{
            required: "Username is reqired",
            minLength: {
              value: 3,
              message: "Username should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Username should be max 24 characters long",
            },
          }}
        />

        <CustomInput
          placeholder="Email"
          name="email"
          control={control}
          rules={{
            required: "Email is reqired",
            pattern: {value: EMAIL_REGEX, message: "Email is invalid"},
          }}
        />

        <CustomInput
          placeholder="Phone Number"
          name="phoneNumber"
          control={control}
          rules={{
            required: "Phone Number is reqired",
            // pattern: {value: EMAIL_REGEX, message: "Email is invalid"},
            maxLength: {
              value: 11,
              message: "Username should be max 24 characters long",
            },
          }}
        />

        <CustomInput
          placeholder="Password"
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />
        <CustomInput
          control={control}
          placeholder="Confirm Password"
          name="confirmPassword"
          rules={{
            validate: (value: string) =>
              value === pwdValidate || "Password do not match",
          }}
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
          type="PRIMARY"
          bgColor={""}
          fgColor={""}
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialBtn />

        <CustomButton
          text="Have an account? Log in"
          onPress={SignInPress}
          type="TERTIARY"
          bgColor={""}
          fgColor={""}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 3,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default SignUpScreen;
