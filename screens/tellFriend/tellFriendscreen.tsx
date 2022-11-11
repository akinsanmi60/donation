import {
  StyleSheet,
  Text,
  Image,
  View,
  useWindowDimensions,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import CustomButton from "../../common/customButton";
import {Avatar} from "@react-native-material/core";
import {Ionicons} from "@expo/vector-icons";
import {friendData} from "./data";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types";

function TellAFriendScreen() {
  const {height} = useWindowDimensions();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate("SelectMedium");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/new-assets/Sociallife-pana.png")}
          style={[styles.logo, {height: height * 0.4}]}
          resizeMode="contain"
        />
        <CustomButton
          text="INVITE FRIEND"
          bgColor="#009CDE"
          fgColor="white"
          onPress={handlePress}
        />
        <Text style={styles.PText}>Invited</Text>
        <>
          {friendData.map((item, i) => (
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
              <View style={{width: "17%"}}>
                <Text style={styles.avtarText}>{item.status}</Text>
              </View>

              <Pressable
                onPress={handlePress}
                style={[styles.btncontainer, {backgroundColor: "#009CDE"}]}
              >
                <Text style={{color: "white"}}>Resend</Text>
              </Pressable>
            </View>
          ))}
        </>
      </View>
    </ScrollView>
  );
}

export default TellAFriendScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 9,
  },
  logo: {
    width: "100%",
    maxWidth: 500,
    maxHeight: 400,
    marginVertical: 7,
  },
  PText: {
    marginTop: 17,
    marginBottom: 15,
    fontSize: 19,
    fontWeight: "600",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
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
    fontWeight: "600",
  },
  btncontainer: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
