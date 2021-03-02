import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Auth } from "aws-amplify";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { AppImagePicker } from "./../components/AppImagePicker";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const DATA = [];

class InformationItem {
  constructor(title, message, image, type) {
    this.title = title;
    this.message = message;
    this.image = image;
    this.type = type;
  }
}

const comida = require("../../assets/images/comida_logo.png");
const item1 = new InformationItem(
  "1 plate of food = 0.6 USD",
  "Feed a child for 1 month: 12 USD",
  comida,
  "image"
);
var item2 = {
  title: "+ 907",
  message: "Volunteer mothers",
};
var item3 = {
  title: "+ 907",
  message: "Volunteer mothers",
};
var item4 = {
  title: "+ 907",
  message: "Volunteer mothers",
};
DATA.push(item1);
DATA.push(item2);
DATA.push(item3);
DATA.push(item4);

export default function Home() {
  let [index, setIndex] = useState(0);

  function renderItem({ item, index }) {
    if (item.image) {
      return (
        <View style={styles.itemContainer}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      );
    }

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>{item.title}</Text>
        <Text style={styles.itemLabel}>{item.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.carouselContainer}>
        <Carousel
          data={DATA}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          layout={"default"}
          contentContainerCustomStyle={styles.contentContainer}
          onSnapToItem={(index) => setIndex(index)}
          loop={true}
          autoplay={true}
          // enableMomentum={false}
          // lockScrollWhileSnapping={true}
          autoplayDelay={1000}
          autoplayInterval={3000}
        />
      </View>
      <View style={styles.secondContainer}>
        <AppImagePicker></AppImagePicker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  carouselContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#325e9d", //'#325e9d'
    alignContent: "center",
    justifyContent: "center",
  },
  secondContainer: {
    flex: 3,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2c300",
    borderRadius: 20,
  },
  itemLabel: {
    color: "white",
    fontSize: 24,
  },
  itemTitle: {
    marginTop: 15,
    flex: 1,
    color: "white",
    fontSize: 24,
  },
  image: {
    marginTop: 15,
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
