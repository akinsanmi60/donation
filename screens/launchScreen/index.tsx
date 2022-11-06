import React, {useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types";

type LaunchScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  "Launch"
>;

function LauchScreen() {
  const navigation = useNavigation<LaunchScreenNavigationType>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Welcome");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.word}>WC</Text>
      </View>
      <Text style={styles.title}>World Citizen</Text>
    </View>
  );
}

export default LauchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009CDE",
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
  },
  box: {
    borderRadius: 100,
    backgroundColor: "white",
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  word: {
    fontSize: 70,
    color: "#009CDE",
  },
  title: {
    fontSize: 24,
    color: "white",
    marginTop: 12,
  },
});
