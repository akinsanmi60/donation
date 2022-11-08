import React from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";
import CustomInput from "../../common/customInput";
import CustomButton from "../../common/customButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import {ConfirmEmailProp, RootStackParamList} from "../../types";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

type ConfirmScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  "Confirmation"
>;

const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm<ConfirmEmailProp>();
  const navigation = useNavigation<ConfirmScreenNavigationType>();

  const onConfirmPressed = (data: ConfirmEmailProp) => {
    console.log(data.code);
    navigation.navigate("Login");
  };

  const onResendPress = () => {
    // eslint-disable-next-line no-undef
    console.warn("onResendPress");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          name="code"
          control={control}
          rules={{
            required: "Code is reqired",
          }}
        />

        <CustomButton
          text="Confirm"
          onPress={handleSubmit(onConfirmPressed)}
          bgColor="#009CDE"
          fgColor="white"
        />
        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          bgColor="transparent"
          fgColor="#3B71F3"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;

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
