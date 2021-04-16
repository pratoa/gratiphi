import React, { useState } from "react";
import Constants from "expo-constants";

import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
  Modal,
  Platform,
  ScrollView,
} from "react-native";
import { Auth } from "aws-amplify";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { AppImagePicker } from "./../components/AppImagePicker";
import colors from "../config/colors";
import Screen from "../components/Screen";

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

const images = [
  {
    id: 1,
    url: require("./../../assets/images/food_security.png"),
    description:
      "A team of nutritutionists prepare weekly menus that the volunteer mothers cook, based on calorie requirements to ensure normal growth and development in children. We work to ensure that every child receives 1 meal a day from Monday to Friday.",
    title: "Food Security",
    modalImage: require("./../../assets/images/programa-seguridad.jpg"),
  },
  {
    id: 2,
    url: require("./../../assets/images/education.png"),
    description:
      "We are committed to the comprehensive growth of children. Through reading and playing, we seek to develop skills that allow us to influence their emotional and social development, so that they can have better school performance.",
    title: "Education and Recreation",
    modalImage: require("./../../assets/images/programa-educacion.jpg"),
  },
  {
    id: 3,
    url: require("./../../assets/images/health.png"),
    description:
      "We focus on monitoring the height and weight of children, in order to assess their nutritional status and be able to provide supplements to malnutrition cases. We also deworm children twice a year to ensure better absorption of nutrients, avoid diarrhea and anemia.",
    title: "Health",
    modalImage: require("./../../assets/images/programa-salud.jpg"),
  },
  {
    id: 4,
    url: require("./../../assets/images/training.png"),
    description:
      "Mothers do volunteer work and develop leadership in their communities. We train them in nutrition, breastfeeding, hygiene, food handling, negotiation, conflict resolution, disease prevention, anthropometric measurement and weighing, among others.",
    title: "Training and Empowerment",
    modalImage: require("./../../assets/images/programa-formacion.jpg"),
  },
  {
    id: 5,
    url: require("./../../assets/images/family.png"),
    description:
      "We work in communities to handle crisis situations and thus prevent abuse, child abuse and depression. We offer psychological support and promote positive education.",
    title: "Family Development",
    modalImage: require("./../../assets/images/programa-desarrollo.jpg"),
  },
];

const ourMission = {
  title: "Our Mission",
  description:
    "Alimenta La Solidaridad is an organization that develops sustainable solutions to the food security challenges of Venezuelan families. \
    We promote community organization and volunteer work as a way to provide daily lunches to children at risk or experiencing nutritional\
  deficiency as a result of the complex humanitarian crisis.",
};

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [modalInfo, setModalInfo] = useState({
    title: "",
    description: "",
    image: null,
  });

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
    <>
      <Screen>
        <View style={styles.container}>
          <Carousel
            data={DATA}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            layout={"default"}
            contentContainerCustomStyle={styles.carouselContainer}
            onSnapToItem={(index) => setIndex(index)}
            loop={true}
            autoplay={true}
            autoplayDelay={1000}
            autoplayInterval={3000}
          />
        </View>

        <View style={styles.secondContainer}>
          <Text style={styles.modalTitle}>Our Programs</Text>
          <FlatList
            scrollEnabled={false}
            data={images}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  setModalVisible(true);
                  setModalInfo({
                    title: item.title,
                    description: item.description,
                    image: item.modalImage,
                  });
                }}
              >
                <Image
                  style={styles.icons}
                  resizeMode="center"
                  source={item.url}
                ></Image>
              </TouchableWithoutFeedback>
            )}
          ></FlatList>
          <ScrollView
            contentContainerStyle={styles.thirdViewContent}
            style={styles.thirdContainer}
          >
            <Text style={styles.modalTitle}>{ourMission.title}</Text>
            <Text style={styles.modalText}>{ourMission.description}</Text>
          </ScrollView>
        </View>
      </Screen>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{modalInfo.title}</Text>
          <Image
            resizeMode="stretch"
            style={styles.modalImage}
            source={modalInfo.image}
          ></Image>
          <Text style={styles.modalText}>{modalInfo.description}</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
  },
  modalImage: {
    height: "30%",
    width: "60%",
  },
  modalText: {
    fontSize: 22,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "black",
    padding: 15,
    textAlign: "auto",
  },
  modalTitle: {
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "black",
    fontSize: 25,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.primary, //'#325e9d'
    alignContent: "center",
    justifyContent: "center",
  },
  secondContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 4,
    backgroundColor: colors.white,
  },
  thirdContainer: {
    backgroundColor: colors.white,
    flex: 4,
    flexGrow: 5,
  },
  thirdViewContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    width: 110,
    height: 110,
    padding: 15,
    margin: 5,
    backgroundColor: colors.white,
  },
  carouselContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.mustardYellow,
    borderRadius: 20,
  },
  itemLabel: {
    color: colors.white,
    fontSize: 24,
  },
  itemTitle: {
    marginTop: 15,
    flex: 1,
    color: colors.white,
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
