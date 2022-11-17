import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";
import CustomButton from "../../common/customButton";
import {RootStackParamList} from "../../types";
import {fakeData} from "./data";

const RewardScreen = () => {
  const {height} = useWindowDimensions();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Rewards">>();

  const handlePress = () => {
    navigation.navigate("ClaimReward");
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/new-assets/BoxingDay.png")}
          style={[styles.logo, {height: height * 0.4}]}
          resizeMode="contain"
        />
        <View style={styles.points}>
          <Text style={styles.pointA}>300</Text>
          <Text style={styles.pointB}>Point earned</Text>
        </View>

        <View style={styles.btnContainer}>
          <CustomButton
            text="CLAIM"
            bgColor="#009CDE"
            fgColor="white"
            onPress={handlePress}
          />
        </View>
        <View>
          <Text style={styles.text}>History</Text>
          {fakeData
            .sort((a, b) => (a.date > b.date ? 1 : -1))
            .map((item, i) => (
              <View key={i} style={styles.boxHistory}>
                <View>
                  <Text style={styles.type}>{item.type}</Text>
                  <View style={styles.boxTime}>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text>{item.time}</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.type}>{item.reward}</Text>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RewardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: "100%",
    maxHeight: 400,
    marginVertical: 7,
  },
  points: {
    marginVertical: 12,
  },
  pointA: {
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
  },
  pointB: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "400",
  },
  btnContainer: {
    marginVertical: 15,
  },
  text: {
    fontWeight: "700",
    fontSize: 18,
    marginVertical: 12,
  },
  boxHistory: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  boxTime: {
    flexDirection: "row",
    marginTop: 5,
  },
  type: {
    fontSize: 15,
    fontWeight: "600",
  },
  date: {
    marginRight: 20,
  },
});
