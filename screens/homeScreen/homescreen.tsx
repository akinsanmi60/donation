import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Avatar} from "@react-native-material/core";
import CustomScrollView from "../../common/customScroll";
import {individualData} from "./data";

function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.rowBox}>
              <View>
                <Text>Hi</Text>
                <Text style={styles.titleName}>Akinsanmi</Text>
              </View>
              <View style={styles.rowDetail}>
                <Ionicons
                  name="ios-notifications-outline"
                  size={32}
                  color="green"
                  style={styles.icons}
                />
                <Avatar
                  size={32}
                  label="Jed Watson"
                  icon={props => <Ionicons name="person" {...props} />}
                  image={{uri: "https://mui.com/static/images/avatar/1.jpg"}}
                  autoColor
                />
              </View>
            </View>
            <Text style={styles.hText}>Put a smile on a face by donating</Text>
            <View style={styles.filterBox}>
              <View style={styles.inputBox}>
                <Ionicons
                  name="search-outline"
                  size={24}
                  color="black"
                  style={styles.glass}
                />
                <TextInput placeholder="Search donation for oppurtunity" />
              </View>
              <Pressable>
                <Ionicons
                  name="md-filter-outline"
                  size={30}
                  color="black"
                  style={styles.filterBtn}
                />
              </Pressable>
            </View>
          </View>

          <View style={styles.view}>
            <Text style={styles.donationBox}>Donation for Individuals</Text>
            <CustomScrollView data={individualData} />
          </View>

          <View style={styles.view}>
            <Text style={styles.donationBox}>Donation to NGO'S</Text>
            <CustomScrollView data={individualData} />
          </View>

          <View style={styles.view}>
            <Text style={styles.donationBox}>Community Project</Text>
            <CustomScrollView data={individualData} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    paddingTop: 15,
  },
  box: {
    padding: 15,
  },
  view: {
    paddingLeft: 15,
  },
  rowBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  rowDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icons: {
    marginRight: 15,
  },
  titleName: {
    fontSize: 17,
    fontWeight: "600",
  },
  hText: {
    fontSize: 15,
    fontWeight: "400",
    marginVertical: 10,
  },
  inputBox: {
    width: "85%",
    height: 50,
    flexDirection: "row",
    borderRadius: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
  },
  glass: {
    zIndex: 9999,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 22,
    marginRight: 10,
    marginTop: 12,
  },
  filterBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  filterBtn: {
    marginTop: 9,
    marginRight: 8,
  },
  donationBox: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 18,
  },
});

export default HomeScreen;
