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

type SplashAScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

function SplashScreenA() {
  const navigation = useNavigation<SplashAScreenNavigationType>();
  const {height} = useWindowDimensions();

  const handleOnPress = () => {
    navigation.navigate("Schedule");
  };
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.buttonSkip} onPress={handleOnPress}>
        <Text>Skip</Text>
      </TouchableOpacity>

      <Image
        source={require("../../assets/new-assets/Group76.png")}
        style={[styles.logo, {height: height * 0.4}]}
        resizeMode="contain"
      />

      <View>
        <Text style={styles.title}>Welcome to world citizen</Text>
        <Text style={styles.body}>
          Cloth donation has been reduce to the simplest form, very minimal
          click and your donation is complete
        </Text>
      </View>

      <Text style={styles.pageNos}>1/3</Text>

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
    marginTop: 10,
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
    // padding: 0,
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
    marginTop: 20,
    marginBottom: 20,
  },
  btnP: {
    color: "white",
  },
});

export default SplashScreenA;
