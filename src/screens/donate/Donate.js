import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import * as queries from "../../../graphql/queries";
import { View, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import DoneeCard from "./DoneeCard";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

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
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
});
