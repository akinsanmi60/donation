import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../common/customInput";
import CustomButton from "../../common/customButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {ResetProp, RootStackParamList} from "../../types";

type ResetScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  "ResetPassword"
>;

const NewPasswordScreen = () => {
  const navigation = useNavigation<ResetScreenNavigationType>();

  const {control, handleSubmit, watch} = useForm<ResetProp>();
  const pwdValidate = watch("newPassword");

  const onSubmitPressed = () => {
    navigation.navigate("HomeScreen");
  };

  const onSignInPress = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{
            required: "Code is reqired",
            maxLength: {
              value: 5,
              message: "code is 5 character long",
            },
          }}
        />

        <CustomInput
          placeholder="New Password"
          name="newPassword"
          control={control}
          rules={{
            required: "New Password is required",
            minLength: {
              value: 8,
              message: "New Password should be at least 8 characters long",
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
          text="Submit"
          onPress={handleSubmit(onSubmitPressed)}
          bgColor="#009CDE"
          fgColor="white"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          bgColor="transparent"
          fgColor="gray"
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
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
});

export default NewPasswordScreen;
