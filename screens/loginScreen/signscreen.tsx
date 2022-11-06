import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../common/customInput";
import CustomButton from "../../common/customButton";
import SocialBtn from "../../common/sociaButtons/socialBtn";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

type LoginScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

function Signscreen() {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigation = useNavigation<LoginScreenNavigationType>();

  const SigInPress = () => {
    navigation.navigate("Home");
  };

  const ForgotPress = () => {
    navigation.navigate("ForgotPassword");
  };

  const SignUpPress = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <CustomInput
          placeholder="Email"
          name="email"
          control={control}
          rules={{
            required: "Email is reqired",
            pattern: {value: EMAIL_REGEX, message: "Email is invalid"},
          }}
          secureTextEntry={""}
        />

        <CustomInput
          placeholder="Password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />

        <CustomButton
          text="Log In"
          onPress={handleSubmit(SigInPress)}
          bgColor={""}
          fgColor={""}
          type="PRIMARY"
        />

        <CustomButton
          text="Forgot Password"
          onPress={ForgotPress}
          type="TERTIARY"
          bgColor={""}
          fgColor={""}
        />

        <SocialBtn />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={SignUpPress}
          type="TERTIARY"
          bgColor={""}
          fgColor={""}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    marginTop: 12,
    width: "90%",
    maxWidth: 500,
    maxHeight: 400,
  },
});

export default Signscreen;
