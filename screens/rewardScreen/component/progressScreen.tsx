import React from "react";
import {View, Text, StyleSheet, ScrollView, Image} from "react-native";
import CustomButton from "../../../common/customButton";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../types";

type ClaimScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  "RewardClaimed"
>;

function ProgressScreen() {
  const navigation = useNavigation<ClaimScreenNavigationType>();

  const claimPress = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <Image
            source={require("../../../assets/new-assets/VectorMark.png")}
            style={styles.img}
          />
          <Text style={styles.PText}>Reward claimed</Text>
          <Text style={styles.titleText}>Successfully!!!</Text>
        </View>

        <View style={styles.inputBox}>
          <CustomButton
            text="COMPLETE"
            onPress={claimPress}
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
    alignSelf: "center",
  },
  inputBox: {
    marginTop: 12,
  },
  box: {
    marginVertical: "40%",
  },
  img: {
    alignSelf: "center",
    marginVertical: 15,
  },
  PText: {
    alignSelf: "center",
    marginTop: 15,
    fontSize: 18,
  },
  label: {
    fontSize: 15,
    fontWeight: "400",
  },
});

export default ProgressScreen;
