import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  Animated,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Carousel, { Pagination } from "react-native-snap-carousel";
import DoneeCard from "./DoneeCard";
import ExpandedDoneeCard from "./ExpandedDoneeCard";

class DoneeItem {
  constructor(name, biography, image) {
    this.name = name;
    this.biography = biography;
    this.image = image;
  }
}

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const DATA = [];
DATA.push(
  new DoneeItem(
    "Austin",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    require("../../../assets/images/donees/austin-nicomedez.jpg")
  )
);
DATA.push(
  new DoneeItem(
    "Katie",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    require("../../../assets/images/donees/katie-moum.jpg")
  )
);
DATA.push(
  new DoneeItem(
    "Muhammad",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    require("../../../assets/images/donees/muhammad-muzamil.jpg")
  )
);
DATA.push(
  new DoneeItem(
    "Muhammad",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    require("../../../assets/images/donees/muhammad-taha-khan.jpg")
  )
);
DATA.push(
  new DoneeItem(
    "Nivedita",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    require("../../../assets/images/donees/nivedita-singh.jpg")
  )
);

export default function Donate() {
  // const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [yOffset, setYoffSet] = useState(null);
  const [xOffset, setXoffSet] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  // state = { yOffset: null, xOffset: null, selectedCard: null };

  function renderItem({ item, index }) {
    return (
      <DoneeCard
        yOffset={yOffset}
        xOffset={xOffset}
        item={item}
        index={index}
        selectCard={(id, xOffset2, yOffset2) => {
          setSelectedCard(id);
          setXoffSet(xOffset2);
          setYoffSet(yOffset2);
        }}
      />
    );
  }

  function updateSelectedCard(selectedCard) {
    setSelectedCard(selectedCard);
  }

  return (
    <View style={styles.container}>
      <Carousel
        data={DATA}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        layout={"default"}
        onSnapToItem={(index) => setIndex(index)}
        enableSnap={true}
        loop={true}
        enableMomentum={true}
      />
      {selectedCard && (
        <ExpandedDoneeCard
          updateSelectedCard={updateSelectedCard}
          item={DATA[index]}
          yOffset={yOffset}
          xOffset={xOffset}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#325e9d",
  },
});
