import React from "react";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import {RootStackParamList} from "../../types";

type SplashCScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

function SplashScreenC() {
  const navigation = useNavigation<SplashCScreenNavigationType>();
  const {height} = useWindowDimensions();

  const handleOnPress = () => {
    navigation.navigate("Schedule");
  };

  return (
    <View style={styles.root}>
      <Image
        source={require("../../assets/new-assets/Group76.png")}
        style={[styles.logo, {height: height * 0.5}]}
        resizeMode="contain"
      />

      <View>
        <Text style={styles.title}>Dropoff Points</Text>
        <Text style={styles.body}>
          Find dropoff points near you for easy of donations
        </Text>
      </View>

      <Text style={styles.pageNos}>3/3</Text>

      <View style={styles.round1}>
        <TouchableOpacity onPress={handleOnPress}>
          <View style={styles.round2}>
            <Text style={styles.btnP}>{">"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    marginTop: 5,
    width: "100%",
    maxWidth: 500,
    maxHeight: 400,
  },
  buttonSkip: {
    marginTop: 20,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 23,
    fontWeight: "500",
    marginTop: -12,
    marginBottom: 13,

    textAlign: "center",
  },
  body: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 13,
    textAlign: "center",
  },
  round1: {
    borderWidth: 2,
    borderRadius: 100,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  round2: {
    backgroundColor: "#009CDE",
    borderRadius: 100,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  pageNos: {
    fontSize: 20,
    marginTop: 22,
    marginBottom: 22,
  },
  btnP: {
    color: "white",
  },
});

export default SplashScreenC;
