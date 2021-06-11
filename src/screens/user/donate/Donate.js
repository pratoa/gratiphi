import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import * as queries from "../../../graphql/queries";
import { StyleSheet, Dimensions, View, Alert } from "react-native";
import Carousel from "react-native-snap-carousel";
import DoneeCard from "./DoneeCard";
import Screen from "../../../components/common/Screen";
import AppButton from "../../../components/common/AppButton";
import Constants from "expo-constants";
import colors from "../../../config/colors";

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
      //TO-DO: better handling of error when api fails

      try {
        const response = await API.graphql({ query: queries.listDonees });
        const listOfDonees = await response.data.listDonees.items;
        setDonees(listOfDonees);
      } catch (err) {
        Alert.alert(
          "There was an error fetching data! We apologize, please re-try later"
        );
        console.log(err);
      }
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

  function donate() {
    console.log(index);
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
      <AppButton title="Donate" onPress={donate} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
});
