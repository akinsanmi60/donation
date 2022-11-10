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
import {Ionicons} from "@expo/vector-icons";

const SelectMediumScreen = () => {
  const {height} = useWindowDimensions();
  const buttonDetails = [
    {
      title: "Linkedin",
      logo: "logo-linkedin",
      color: "#0e76a8",
    },
    {
      title: "Facebook",
      logo: "logo-facebook",
      color: "#4267B2",
    },
    {
      title: "Twitter",
      logo: "logo-twitter",
      color: "#1DA1F2",
    },
    {
      title: "Instagram",
      logo: "logo-instagram",
      color: "#fbad50",
    },
    {
      title: "WhatsApp",
      logo: "logo-whatsapp",
      color: "#075e54",
    },
    {
      title: "E-mail",
      logo: "mail",
      color: "#c71610",
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/new-assets/Socialtree-cuate.png")}
          style={[styles.logo, {height: height * 0.4}]}
          resizeMode="contain"
        />
        {buttonDetails.map(item => (
          <Pressable
            key={item.title}
            style={[styles.btncontainer, {backgroundColor: "white"}]}
          >
            <View style={styles.box}>
              <Ionicons name={`${item.logo}`} size={33} color={item.color} />
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginLeft: 9,
                  marginTop: 2,
                }}
              >
                {item.title}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default SelectMediumScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 9,
  },
  logo: {
    width: "100%",
    maxWidth: 500,
    maxHeight: 400,
    marginVertical: 2,
    marginBottom: 18,
  },
  btncontainer: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 9,
    paddingVertical: 12,
  },
  box: {
    flexDirection: "row",
  },
});
