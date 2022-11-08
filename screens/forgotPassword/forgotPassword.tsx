import {StyleSheet, Text, View, ScrollView} from "react-native";
import React from "react";
import CustomInput from "../../common/customInput";
import CustomButton from "../../common/customButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import {ForgetProp, RootStackParamList} from "../../types";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

type ForgetScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  "ForgotPassword"
>;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm<ForgetProp>();
  const navigation = useNavigation<ForgetScreenNavigationType>();

  const onSendPressed = () => {
    navigation.navigate("ResetPassword");
  };

  const onSignInPress = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Forgot your password</Text>

        <CustomInput
          placeholder="Email"
          name="email"
          control={control}
          rules={{
            required: "Email is reqired",
            pattern: {value: EMAIL_REGEX, message: "Email is invalid"},
          }}
        />

        <CustomButton
          text="Send"
          onPress={handleSubmit(onSendPressed)}
          bgColor="#009CDE"
          fgColor="white"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          fgColor="gray"
          bgColor="transparent"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
});
