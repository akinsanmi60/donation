import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Ionicons, Entypo} from "@expo/vector-icons";

function MoreScreen() {
  const optionItems = [
    {
      title: "Favourite",
      //  click: handlePress,
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
      //  click: pressDonor,
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
      //  click: pressDonor,
      icon: (
        <Entypo name="sound" size={30} color="black" style={{marginRight: 7}} />
      ),
    },
    {
      title: "Donors nearby",
      //  click: pressDonor,
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
          <View style={styles.optionBox}>
            {item.icon}
            <Text style={styles.pText}>{item.title}</Text>
          </View>
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
  },
  optionBox: {
    flexDirection: "row",
    paddingVertical: 10,
    marginVertical: 15,
    borderBottomWidth: 1,
    // borderColor: "#E0E0E0",
  },
  pText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    marginTop: 10,
  },
});
