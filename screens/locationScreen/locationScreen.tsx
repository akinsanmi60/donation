import {StyleSheet, Text, useWindowDimensions, Image, View} from "react-native";
import React from "react";
import CustomButton from "../../common/customButton";

const LocationScreen = () => {
  const {height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/new-assets/Location.png")}
          style={[styles.logo, {height: height * 0.4}]}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.ext}>Turnon your location</Text>
      <Text style={styles.bodyText}>
        Turnon your location so we can easily schedule a pick and see other
        donors near you.
      </Text>
      <View style={styles.btnBox}>
        <CustomButton
          text="Ok"
          //   onPress={getLocation}
          bgColor="#FE581E"
          fgColor="white"
          wdSize="45%"
        />
        <CustomButton
          text="Not Now"
          //   onPress={}
          bgColor="#009CDE"
          fgColor="white"
          wdSize="45%"
        />
      </View>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 15,
  },
  logo: {
    width: "100%",
    maxHeight: 400,
    marginBottom: 20,
  },
  ext: {
    alignSelf: "center",
    fontSize: 20,
    marginVertical: 13,
    fontWeight: "700",
  },
  bodyText: {
    fontSize: 15,
    marginVertical: 8,
    fontWeight: "400",
    textAlign: "center",
  },
  btnBox: {
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});
