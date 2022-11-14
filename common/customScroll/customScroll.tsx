import {FontAwesome5} from "@expo/vector-icons";
import * as React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import CustomButton from "../customButton";

const {width} = Dimensions.get("window");
type ScrollProp = {
  data: {
    image: string;
    name: string;
    size: string;
  }[];
};

function CustomScrollView({data}: ScrollProp) {
  return (
    <View>
      <ScrollView
        horizontal={true}
        decelerationRate={5}
        snapToOffsets={data.map((item, i) => i * (width - 60))}
        snapToAlignment={"start"}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {data.map(item => {
          return (
            <View
              key={item.name}
              style={[styles.view, {backgroundColor: "#F7FCFE"}]}
            >
              <Image style={styles.img} source={item.image} />
              <View style={styles.box}>
                <Text style={styles.ptext}>
                  Help cloth <Text style={styles.intext}>{item.name}</Text>
                </Text>
                <Text style={styles.ptext2}>
                  Estimated Cloth-size: <Text>{item.size}</Text>
                </Text>
                <Text style={styles.ptext}>Total Contribution: 50</Text>
                <View style={styles.action}>
                  <CustomButton
                    text="DONATE"
                    bgColor="#009CDE"
                    fgColor="white"
                    wdSize="65%"
                  />
                  <Text style={styles.boxicon}>
                    <FontAwesome5 name="heart" size={40} style={styles.icon} />
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default CustomScrollView;

const styles = StyleSheet.create({
  view: {
    marginTop: 10,
    backgroundColor: "blue",
    width: width - 80,
    margin: 10,
    height: 370,
    borderRadius: 40,
  },
  img: {
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 200,
    // resizeMode: "stretch",
  },
  box: {
    padding: 19,
  },
  ptext: {
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 2,
  },
  ptext2: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 2,
  },
  intext: {
    // fontSize: 16,
    color: "#009CDE",
    fontWeight: "400",
  },
  icon: {
    color: "#FE581E",
    marginVertical: 10,
  },
  boxicon: {
    padding: 10,
  },
  action: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
