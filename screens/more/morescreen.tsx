import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Ionicons, Entypo} from "@expo/vector-icons";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types";
import {useNavigation} from "@react-navigation/native";

type MoreScreenNavigationType = NativeStackNavigationProp<RootStackParamList>;

function MoreScreen() {
  const navigation = useNavigation<MoreScreenNavigationType>();

  //Click function
  const favouritePress = () => {
    navigation.navigate("Favourite");
  };
  const donationPress = () => {
    navigation.navigate("Donation");
  };
  const rewardPress = () => {
    navigation.navigate("Rewards");
  };

  const pressDonor = () => {
    navigation.navigate("FellowDonor");
  };

  const optionItems = [
    {
      title: "Favourite",
      click: favouritePress,
      icon: (
        <Ionicons
          name="bulb-outline"
          size={30}
          color="black"
          style={{marginRight: 7}}
        />
      ),
    },
    {
      title: "My donations",
      click: donationPress,
      icon: (
        <Ionicons
          name="people-circle-outline"
          size={30}
          color="black"
          style={{marginRight: 7}}
        />
      ),
    },
    {
      title: "Rewards",
      click: rewardPress,
      icon: (
        <Entypo name="sound" size={30} color="black" style={{marginRight: 7}} />
      ),
    },
    {
      title: "Donors nearby",
      click: pressDonor,
      icon: (
        <Entypo name="sound" size={30} color="black" style={{marginRight: 7}} />
      ),
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={optionItems}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <Pressable onPress={item.click}>
            <View style={styles.optionBox}>
              {item.icon}
              <Text style={styles.pText}>{item.title}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
  },
  optionBox: {
    flexDirection: "row",
    paddingVertical: 10,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  pText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    marginTop: 10,
  },
});
