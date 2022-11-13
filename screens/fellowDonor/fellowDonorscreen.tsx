import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import {donorData} from "./data";
import {Avatar} from "@react-native-material/core";
import {Ionicons} from "@expo/vector-icons";

function FellowDonorScreen() {
  const {height} = useWindowDimensions();
  const handlePress = () => {
    // navigation.navigate("SelectMedium");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.boxLogo}>
          <Image
            source={require("../../assets/new-assets/Sharelink-pana.png")}
            style={[styles.logo, {height: height * 0.5}]}
            resizeMode="contain"
          />
        </View>
        <View style={styles.donorBox}>
          {donorData.map((item, i) => (
            <View style={styles.box} key={i}>
              <View style={styles.rowDetail}>
                <Avatar
                  size={40}
                  label={item.name}
                  icon={props => <Ionicons name="person" {...props} />}
                  image={{uri: item.avatar}}
                  autoColor
                  style={styles.avatar}
                />
                <View style={{alignItems: "center"}}>
                  <Text style={styles.avtarText}>{item.name}</Text>
                </View>
              </View>
              <View>
                <Text
                  style={[styles.avtarText, {color: "#828282", fontSize: 13}]}
                >
                  {item.distance}
                </Text>
              </View>

              <Pressable
                onPress={handlePress}
                style={[styles.btncontainer, {backgroundColor: "#009CDE"}]}
              >
                <Text style={{color: "white", fontSize: 13}}>Buzz</Text>
              </Pressable>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default FellowDonorScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 9,
  },
  boxLogo: {
    borderRadius: 40,
    borderWidth: 1,
    width: "100%",
    maxHeight: 400,
    marginVertical: 7,
  },
  logo: {
    width: "100%",
    maxWidth: 500,
    maxHeight: 400,
    marginBottom: 18,
  },
  donorBox: {
    marginTop: 30,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 11,
  },
  rowDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "33%",
    alignContent: "center",
  },
  avatar: {
    marginRight: 10,
  },
  avtarText: {
    fontSize: 14,
    marginTop: 9,

    // fontWeight: "600",
  },
  btncontainer: {
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
