import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

function FollowUPScreen() {
  const {height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/new-assets/edmund.jpg")}
          style={[styles.logo, {height: height * 0.4}]}
          resizeMode="contain"
        />
        <Text style={styles.pText}>How was your donation used?</Text>
        <Text style={styles.bodyText}>
          Your donation <Text style={{fontWeight: "800"}}>D58465NO</Text> was
          part of the clothes we donated to the zeraphat orphanage home in
          india. Before now, 70% of children in the orphanage home didnt have
          access to clean clothes because the orphanage home could not bear the
          cost, placaing thier priority on feeding and education. The clothes
          were hightly appreciated by the reciepients. Above is a cross sectuion
          oof the reciepients wearing the cloths.
        </Text>
        <Text style={styles.pText}>Details</Text>

        <View style={styles.detailBox}>
          <View>
            <Text style={{marginTop: 13}}>Weight:</Text>
            <Text style={{marginTop: 13}}>Pickup Time:</Text>
          </View>
          <View>
            <Text style={{marginLeft: 18, marginTop: 13}}>20kg</Text>
            <Text style={{marginLeft: 18, marginTop: 13}}>11:42am</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default FollowUPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: "100%",
    maxWidth: 500,
    maxHeight: 400,
    marginVertical: 2,

    borderRadius: 50,
  },
  pText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
  },
  bodyText: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 10,
    textAlign: "justify",
  },
  detailBox: {
    flexDirection: "row",
  },
});
