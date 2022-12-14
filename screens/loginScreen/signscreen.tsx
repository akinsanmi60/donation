import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../common/customInput";
import CustomButton from "../../common/customButton";
import SocialBtn from "../../common/sociaButtons/socialBtn";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {LoginProp, RootStackParamList} from "../../types";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

type LoginScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

function Signscreen() {
  const {control, handleSubmit} = useForm<LoginProp>();

  const navigation = useNavigation<LoginScreenNavigationType>();

  const SigInPress = (data: LoginProp) => {
    console.log(data);
    navigation.navigate("Location");
  };

  const ForgotPress = () => {
    navigation.navigate("ForgotPassword");
  };

  const SignUpPress = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
      <View>
        <Text style={styles.titleText}>Login to your account</Text>
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

        <CustomButton
          text="Log In"
          onPress={handleSubmit(SigInPress)}
          bgColor="#009CDE"
          fgColor="white"
        />

        <CustomButton
          text="Forgot Password"
          onPress={ForgotPress}
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialBtn />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={SignUpPress}
          fgColor="gray"
          bgColor="transparent"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 3,
  },
  PText: {
    alignSelf: "flex-start",
    marginTop: 15,
    marginBottom: 15,
    fontSize: 15,
  },
});

export default Signscreen;
