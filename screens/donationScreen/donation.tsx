import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryZoomContainer,
} from "victory-native";
import {donData, data} from "./data";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types";
import {useNavigation} from "@react-navigation/native";

type FollowNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  "Donation"
>;

function DonationScreen() {
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation<FollowNavigationType>();
  const handleFollowUp = () => {
    navigation.navigate("FollowUp");
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Statistics</Text>

        <VictoryChart
          width={screenWidth}
          theme={VictoryTheme.material}
          height={280}
          containerComponent={<VictoryZoomContainer zoomDimension="x" />}
        >
          <VictoryBar
            barRatio={0.9}
            data={data}
            x="month"
            y="values"
            alignment="start"
            style={{data: {fill: "#009CDE"}}}
          />
        </VictoryChart>

        <Text style={[styles.title, {marginTop: 18}]}>Recent Donantions</Text>

        {donData.map((item, i) => (
          <View key={i}>
            <View style={styles.box}>
              <View style={styles.rowDetail}>
                <Image source={item.img} style={styles.img} />
                <View style={styles.textBox}>
                  <Text style={styles.textA}>{item.donationTag}</Text>
                  <Text style={styles.textB}>{item.date} </Text>
                </View>
                <Text style={[styles.textB, {marginTop: 21, marginLeft: 20}]}>
                  10:22pm
                </Text>
              </View>
              <Pressable
                onPress={handleFollowUp}
                style={[styles.btncontainer, {backgroundColor: "#009CDE"}]}
              >
                <Text style={{color: "white", fontSize: 13}}>Follow Up</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default DonationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 22,
  },
  donorBox: {
    marginTop: 30,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 11,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    paddingVertical: 9,
  },
  rowDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "33%",
    alignContent: "center",
  },
  textBox: {
    flexDirection: "column",
  },
  btncontainer: {
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 20,
  },
  textA: {
    fontWeight: "600",
    fontSize: 15,
  },
  textB: {
    fontWeight: "400",
    fontSize: 13,
  },
});
