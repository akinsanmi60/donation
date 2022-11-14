import {StyleSheet, Text, View, Image, FlatList} from "react-native";
import React from "react";
import {favData} from "./data";

const FavouriteScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={favData}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <View style={styles.rowBox}>
            <Image source={item.img} style={styles.postImg} />
            <View style={styles.boxTitle}>
              <Text style={styles.boxTextA}>{item.title}</Text>
              <Text style={{fontWeight: "600", fontSize: 14}}>{item.type}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 12,
    backgroundColor: "#FFFFFF",
  },
  rowBox: {
    flexDirection: "row",
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 2,
    backgroundColor: "#FFFFFF",
    marginVertical: 10.5,
    marginHorizontal: 1.5,
  },
  postImg: {
    width: "32%",
    height: 120,
    borderRadius: 30,
  },
  boxTitle: {
    width: "70%",
    padding: 15,
  },
  boxTextA: {
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 5,
  },
});
