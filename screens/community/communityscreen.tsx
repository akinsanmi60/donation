import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {Avatar} from "@react-native-material/core";
import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import {comData} from "./data";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types";

function CommunityScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const pressDonor = () => {
    navigation.navigate("FellowDonor");
  };
  const handlePress = () => {
    // navigation.navigate("SelectMedium");
    // navigation.navigate("TellFriend");
  };
  const subBtn = [
    {
      title: "Clothing tips",
      click: handlePress,
      icon: <Ionicons name="bulb-outline" size={20} color="#009CDE" />,
    },
    {
      title: "Find fellow",
      click: pressDonor,
      icon: <Ionicons name="people-circle-outline" size={20} color="#009CDE" />,
    },
    {
      title: "Tell a friend",
      click: pressDonor,
      icon: <Entypo name="sound" size={20} color="#009CDE" />,
    },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.rowBox}>
          <View style={styles.rowDetail}>
            <Avatar
              size={40}
              label="Jed Watson"
              icon={props => <Ionicons name="person" {...props} />}
              image={{uri: "https://mui.com/static/images/avatar/1.jpg"}}
              autoColor
              style={styles.icons}
            />
            <>
              <TextInput
                placeholder="Whats on your mind?"
                style={styles.inputBox}
              />
            </>
          </View>
          <>
            <Pressable
              style={[styles.btncontainer, {backgroundColor: "#009CDE"}]}
            >
              <Text style={{color: "white"}}>Post</Text>
            </Pressable>
          </>
        </View>
        <View style={styles.mediabox}>
          <>
            <Ionicons name="image-outline" size={20} color="black" />
            <Text style={{fontSize: 15, marginHorizontal: 5}}>Photo</Text>
          </>
          <>
            <Ionicons
              name="videocam-outline"
              size={24}
              color="black"
              style={{marginLeft: 13}}
            />
            <Text style={{fontSize: 15, marginHorizontal: 5}}>Video</Text>
          </>
        </View>

        <Text style={{marginVertical: 18, fontSize: 18, fontWeight: "600"}}>
          Goto
        </Text>
        <View style={styles.rowDetail}>
          {subBtn.map(item => {
            return (
              <Pressable
                key={item.title}
                onPress={item.click}
                style={styles.rowDetail}
              >
                {item.icon}
                <Text
                  style={{
                    fontSize: 15,
                    color: "#009CDE",
                    marginHorizontal: 2,
                  }}
                >
                  {item.title}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.boxBanner}>
          <Text style={styles.adText}>
            Earn rewards when you refer a friend
          </Text>
          <Image
            source={require("../../assets/new-assets/Groupuy.png")}
            style={styles.bannerImg}
          />
        </View>

        <Text style={{marginVertical: 18, fontSize: 18, fontWeight: "600"}}>
          Posts
        </Text>

        {comData.map((item, i) => (
          <View style={styles.postCard} key={i}>
            <View style={styles.postHead}>
              <Avatar
                size={40}
                label={item.name}
                icon={props => <Ionicons name="person" {...props} />}
                image={{uri: item.avatar}}
                autoColor
                style={styles.icons}
              />
              <View>
                <Text style={styles.headA}>{item.name}</Text>
                <Text style={styles.headB}>{item.location}</Text>
              </View>
            </View>
            <Text style={styles.postDesc}>{item.description}</Text>
            <Image style={styles.postImg} source={item.image} />

            <View style={styles.postIconBox}>
              <View style={styles.boxIcon}>
                <View style={[styles.boxIcon, {marginRight: 20}]}>
                  <AntDesign
                    name="like1"
                    size={20}
                    color="#009CDE"
                    style={{marginRight: 10}}
                  />
                  <Text style={{fontSize: 16}}>{item.likes}</Text>
                </View>
                <View style={styles.boxIcon}>
                  <Octicons
                    name="comment"
                    size={20}
                    color="#009CDE"
                    style={{marginRight: 10}}
                  />
                  <Text style={{fontSize: 16}}>{item.comment}</Text>
                </View>
              </View>
              <>
                <MaterialIcons name="add-box" size={24} color="#009CDE" />
              </>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
    backgroundColor: "#FFFFFF",
  },
  rowBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  rowDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  icons: {
    marginRight: 15,
  },
  inputBox: {
    width: 220,
    height: 40,
    flexDirection: "row",
    borderRadius: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
  },
  btncontainer: {
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 6,
  },
  mediabox: {
    flexDirection: "row",
    marginHorizontal: 55,
  },
  btncaseP: {
    color: "blue",
  },
  boxBanner: {
    flexDirection: "row",
    backgroundColor: "#b3cee5",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 30,
    height: 110,
    marginVertical: 20,
  },
  img: {
    width: "40%",
    height: 90,
  },
  adText: {
    width: "40%",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
  },
  bannerImg: {
    width: 150,
    height: 70,
  },
  postCard: {
    width: "100%",
    marginVertical: 20,
    borderRadius: 40,
  },
  postHead: {
    flexDirection: "row",
  },
  headA: {
    fontWeight: "600",
    fontSize: 16,
  },
  headB: {
    fontWeight: "300",
    fontSize: 10,
  },
  postAvatar: {},
  postCardTitle: {},
  postDesc: {
    fontSize: 12,
    marginTop: 25,
    fontWeight: "400",
  },
  postImg: {
    width: "100%",
    height: 250,
    borderRadius: 40,
    marginVertical: 20,
  },
  postIconBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxIcon: {
    flexDirection: "row",
  },
  postIcon: {},
});
