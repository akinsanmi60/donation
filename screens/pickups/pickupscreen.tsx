import React from "react";
import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {availData} from "./data";
function PickupScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <View style={styles.headBoxA}>
            <Text style={styles.titleP}>ID</Text>
          </View>
          <View style={styles.headBoxA}>
            <Text style={styles.titleP}>Status</Text>
          </View>
          <View style={styles.headBoxB}>
            <Text style={styles.titleP}>Actions</Text>
          </View>
        </View>

        <View style={styles.bodyBox}>
          {availData.map((item, i) => (
            <View key={i} style={{flexDirection: "row", marginTop: 8}}>
              <View style={styles.headBoxA}>
                <Text style={[styles.titleP, {fontWeight: "400"}]}>
                  {item.id} <Text style={{fontSize: 12}}>12:30pm</Text>
                </Text>
              </View>
              <View style={styles.headBoxA}>
                <Text style={[styles.titleP, {fontWeight: "400"}]}>
                  {item.status}
                </Text>
              </View>
              <View style={[styles.headBoxB, {flexDirection: "row"}]}>
                <Pressable
                  style={[styles.btncontainer, {backgroundColor: "#009CDE"}]}
                >
                  <Text style={{color: "white"}}>Track</Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.btncontainer,
                    {borderWidth: 1, borderColor: "#009CDE"},
                  ]}
                >
                  <Text style={{color: "#009CDE"}}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default PickupScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 0,
    backgroundColor: "#FFFFFF",
  },
  titleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headBoxA: {
    width: "25%",
    padding: 5,
    marginRight: 5,
  },
  headBoxB: {
    width: "50%",
    padding: 5,
  },
  titleP: {
    fontSize: 15,
    fontWeight: "600",
  },
  bodyBox: {
    marginTop: 5,
  },
  btncontainer: {
    width: "44%",
    padding: 3,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
