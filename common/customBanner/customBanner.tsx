import React from "react";
import {
  // FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  // useWindowDimensions,
  View,
} from "react-native";

type DataProp = {
  title: string;
  image: string;
};

function CustomBanner() {
  // const {width, height} = useWindowDimensions();
  const scrollRef = React.createRef<ScrollView>();
  const dummySlider = [
    {
      title: "Earn rewards when you refer a friend",
      image:
        "https://images.unsplash.com/photo-1542410613-d073472c3135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      title: "Civil Wars",
      image:
        "https://images.unsplash.com/photo-1626278664285-f796b9ee7806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Grook",
      image:
        "https://images.unsplash.com/photo-1557342960-7ea3df1d8630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80",
    },
    {
      title: "Deadpool",
      image:
        "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      title: "Spiderman",
      image:
        "https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  ];

  const RenderItems: React.FC<{item: DataProp}> = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.bannerBox}>
          <Text style={styles.adText}>{item.title}</Text>
          <Image
            source={require("../../assets/new-assets/austin.jpg")}
            style={styles.img}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text>CustomBanner</Text>
      <ScrollView horizontal ref={scrollRef}>
        {dummySlider.map((item, i) => {
          return (
            <View key={i}>
              <RenderItems item={item} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default CustomBanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    width: "40%",
    height: 90,
  },
  adText: {
    width: "40%",
    fontSize: 14,
  },
});
