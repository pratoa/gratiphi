import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import * as queries from "../../../../graphql/queries";
import { StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import DoneeCard from "./DoneeCard";
import Screen from "../../../components/common/Screen";

class DoneeItem {
  constructor(name, shortBiography, longBiograhy, image, age, location) {
    this.name = name;
    this.shortBiography = shortBiography;
    this.longBiograhy = longBiograhy;
    this.image = image;
    this.age = age;
    this.location = location;
  }
}

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const DATA = [];
DATA.push(
  new DoneeItem(
    "Austin",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    require("../../../../assets/images/donees/austin-nicomedez.jpg"),
    8,
    "La Vega, Caracas"
  )
);
DATA.push(
  new DoneeItem(
    "Katie",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    require("../../../../assets/images/donees/katie-moum.jpg"),
    10,
    "Portuguesa, Venezuela"
  )
);
DATA.push(
  new DoneeItem(
    "Muhammad",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    require("../../../../assets/images/donees/muhammad-muzamil.jpg"),
    7,
    "Petare, Venezuela"
  )
);
DATA.push(
  new DoneeItem(
    "Muhammad",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    require("../../../../assets/images/donees/muhammad-taha-khan.jpg"),
    11,
    "Coro, Falcon"
  )
);
DATA.push(
  new DoneeItem(
    "Nivedita",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    require("../../../../assets/images/donees/nivedita-singh.jpg"),
    6,
    "Sucre, Venezuela"
  )
);

export default function Donate({ props }) {
  // const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [yOffset, setYoffSet] = useState(null);
  const [xOffset, setXoffSet] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [donees, setDonees] = useState([]);

  useEffect(() => {
    async function getDonees() {
      const response = await API.graphql({ query: queries.listDonees });
      const listOfDonees = await response.data.listDonees.items;
      // console.log(listOfDonees);
      setDonees(listOfDonees);
    }
    getDonees();
  }, []);

  function renderItem({ item, index }) {
    return (
      <DoneeCard
        props={props}
        yOffset={yOffset}
        xOffset={xOffset}
        item={item}
        index={index}
        selectCard={(id, xOffset2, yOffset2) => {
          setSelectedCard(id);
          setXoffSet(xOffset2);
          setYoffSet(yOffset2);
        }}
        navigation={props.navigation}
      />
    );
  }

  function updateSelectedCard(selectedCard) {
    setSelectedCard(selectedCard);
  }

  return (
    <Screen style={styles.container}>
      <Carousel
        data={donees}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        layout={"default"}
        onSnapToItem={(index) => setIndex(index)}
        enableSnap={true}
        loop={true}
        enableMomentum={true}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
