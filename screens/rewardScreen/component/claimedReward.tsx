import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../../common/customInput";
import CustomButton from "../../../common/customButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../types";

const PHONE_REGEX = /^\+?[1-9][0-9]{7,14}$/;

type ClaimScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  "ClaimReward"
>;

type RewardProp = {
  phoneNumber: string;
  points: string;
};

function ClaimedScreen() {
  const {control, handleSubmit} = useForm<RewardProp>();

  const navigation = useNavigation<ClaimScreenNavigationType>();

  const claimPress = (data: RewardProp) => {
    console.log(data);
    navigation.navigate("RewardClaimed");
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleText}>Enter details to claim rewards</Text>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Phone number</Text>
          <CustomInput
            placeholder="+2348160309040"
            name="phoneNumber"
            control={control}
            rules={{
              required: "Phone Number is reqired",
              pattern: {value: PHONE_REGEX, message: "Phone Number is invalid"},
            }}
          />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.label}>Amount of points</Text>
          <CustomInput
            placeholder="Points"
            name="points"
            control={control}
            rules={{
              required: "Points is required",
              maxLength: {
                value: 3,
                message: "Points should not be 3 numbers long",
              },
            }}
          />
        </View>

        <View style={styles.inputBox}>
          <CustomButton
            text="COMPLETE"
            onPress={handleSubmit(claimPress)}
            bgColor="#009CDE"
            fgColor="white"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    marginVertical: 10,
  },
  inputBox: {marginTop: 25},
  PText: {
    alignSelf: "flex-start",
    marginTop: 15,
    marginBottom: 15,
    fontSize: 15,
  },
  label: {
    fontSize: 15,
    fontWeight: "400",
  },
});

export default ClaimedScreen;
