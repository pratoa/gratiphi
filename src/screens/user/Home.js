import React, { useState } from "react";
import Constants from "expo-constants";

import {
  StatusBar,
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
  ImageBackground,
  SafeAreaView,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import colors from "../../config/colors";
import { default as defaultStyle } from "../../config/styles";
import Screen from "../../components/common/Screen";
import AppButton from "../../components/common/AppButton";
import { Header } from "react-native/Libraries/NewAppScreen";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.8);
const DATA = [];
const testImage = require("../../../assets/images/delta2.jpeg");
class InformationItem {
  constructor(title, message, image, type) {
    this.title = title;
    this.message = message;
    this.image = image;
    this.type = type;
  }
}
const alimentaLogo = require("../../../assets/images/alimentaLogo.png");
const comida = require("../../../assets/images/comida_logo.png");
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

const programs = [
  {
    id: 1,
    url: require("../../../assets/images/weight.png"),
    description:
      "A team of nutritutionists prepare weekly menus that the volunteer mothers cook, based on calorie requirements to ensure normal growth and development in children. We work to ensure that every child receives 1 meal a day from Monday to Friday.",
    title: "Food Security",
    modalImage: require("../../../assets/images/programa-seguridad.jpg"),
  },
  {
    id: 2,
    url: require("../../../assets/images/book.png"),
    description:
      "We are committed to the comprehensive growth of children. Through reading and playing, we seek to develop skills that allow us to influence their emotional and social development, so that they can have better school performance.",
    title: "Education and Recreation",
    modalImage: require("../../../assets/images/programa-educacion.jpg"),
  },
  {
    id: 3,
    url: require("../../../assets/images/health.png"),
    description:
      "We focus on monitoring the height and weight of children, in order to assess their nutritional status and be able to provide supplements to malnutrition cases. We also deworm children twice a year to ensure better absorption of nutrients, avoid diarrhea and anemia.",
    title: "Health",
    modalImage: require("../../../assets/images/programa-salud.jpg"),
  },
  {
    id: 4,
    url: require("../../../assets/images/document.png"),
    description:
      "Mothers do volunteer work and develop leadership in their communities. We train them in nutrition, breastfeeding, hygiene, food handling, negotiation, conflict resolution, disease prevention, anthropometric measurement and weighing, among others.",
    title: "Training and Empowerment",
    modalImage: require("../../../assets/images/programa-formacion.jpg"),
  },
  {
    id: 5,
    url: require("../../../assets/images/family.png"),
    description:
      "We work in communities to handle crisis situations and thus prevent abuse, child abuse and depression. We offer psychological support and promote positive education.",
    title: "Family Development",
    modalImage: require("../../../assets/images/programa-desarrollo.jpg"),
  },
];

const ourMission = {
  title: "Our Mission",
  description:
    "Alimenta La Solidaridad is an organization that develops sustainable solutions to the food security challenges of Venezuelan families. We promote community organization and volunteer work as a way to provide daily lunches to children at risk or experiencing nutritional deficiency as a result of the complex humanitarian crisis.",
};
const ourWork = {
  title: "Our Work",
  description:
    "Our organization works because of the active participation of volunteer mothers and fathers, who are the real leaders. They share their home to provide spaces for the community kitchens, they cook, organize the children, clean, and carry out the daily operations of the community kitchens. This co-responsibility model is based on empowerment and responsibility at every stage of the process, strengthening the social fabric and organizational capital of the communities.",
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
    return (
      <View style={styles.itemContainer}>
        <ImageBackground
          source={testImage}
          style={styles.backgroundImage}
          imageStyle={{ borderRadius: 20, opacity: 0.5 }}
        >
          <View style={styles.itemWrapper}>
            <Text style={styles.itemLabel}>+936</Text>
          </View>
          <Text style={styles.itemTitle}>Volunteer Mothers</Text>
        </ImageBackground>
      </View>
    );

    // if (item.image) {
    //   return (
    //     <View style={styles.itemContainer}>
    //       <Image source={item.image} style={styles.image} />
    //       <Text style={styles.itemTitle}>{item.title}</Text>
    //     </View>
    //   );
    // }

    // return (
    //   <View style={styles.itemContainer}>
    //     <Text style={styles.itemLabel}>{item.title}</Text>
    //     <Text style={styles.itemLabel}>{item.message}</Text>
    //   </View>
    // );
  }

  return (
    <>
      <SafeAreaView
        style={[
          styles.mainContainer,
          modalVisible ? { backgroundColor: "rgba(0,0,0,0.5)" } : "",
        ]}
      >
        <FlatList
          ListHeaderComponent={
            <>
              <Text style={styles.sectionTitle}>{ourMission.title}</Text>
              <View style={styles.firstContainer}>
                <Text style={styles.missionText}>{ourMission.description}</Text>
              </View>

              <Text style={styles.sectionTitle}>Our Programs</Text>
            </>
          }
          scrollEnabled={true}
          data={programs}
          numColumns={2}
          backgroundColor={colors.white}
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
              <View style={styles.programItem}>
                <Image
                  style={styles.icons}
                  resizeMode="contain"
                  source={item.url}
                />
                <Text style={styles.programTitle}>{item.title}</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          ListFooterComponent={
            <>
              <Text style={styles.sectionTitle}>Statistics</Text>
              <View style={styles.thirdContainer}>
                <Carousel
                  data={DATA}
                  renderItem={renderItem}
                  sliderWidth={SCREEN_WIDTH}
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
              <Text style={styles.sectionTitle}>{ourWork.title}</Text>
              <View style={styles.firstContainer}>
                <Text style={styles.missionText}>{ourWork.description}</Text>
              </View>
            </>
          }
        />
      </SafeAreaView>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{modalInfo.title}</Text>
            <Image
              resizeMode="stretch"
              style={styles.modalImage}
              source={modalInfo.image}
            ></Image>
            <Text style={styles.modalText}>{modalInfo.description}</Text>
            <View style={styles.modalBottom}>
              <AppButton title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContainer: {
    backgroundColor: colors.white,
  },
  sectionTitle: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 0.05 * SCREEN_WIDTH,
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  firstContainer: {
    // flexDirection: "row",
    // flex: 1,
  },
  secondContainer: {
    backgroundColor: colors.white,
    width: "100%",
    padding: 10,
  },
  thirdContainer: {
    flex: 1,
    height: SCREEN_HEIGHT * 0.22,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  thirdViewContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  missionText: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 0.04 * SCREEN_WIDTH,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    textAlign: "justify",
  },
  sponsorLogo: {
    width: SCREEN_WIDTH * 0.4,
    height: 200,
  },
  //programs
  programItem: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    paddingLeft: 10,
    backgroundColor: colors.white,
  },
  icons: {
    margin: 5,
    marginRight: 5,
    width: SCREEN_WIDTH * 0.12,
    height: SCREEN_WIDTH * 0.12,
    backgroundColor: colors.white,
  },
  programTitle: {
    fontSize: 0.035 * SCREEN_WIDTH,
    flex: 1,
    flexWrap: "wrap",
  },
  //carousel
  carouselContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
    borderRadius: 20,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  itemWrapper: {
    backgroundColor: colors.mustardYellow,
    borderRadius: 10,
    width: "50%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemLabel: {
    color: colors.white,
    fontSize: 0.07 * SCREEN_WIDTH,
  },
  itemTitle: {
    paddingTop: 5,
    color: colors.white,
    fontSize: 0.045 * SCREEN_WIDTH,
    fontWeight: "bold",
  },
  image: {
    marginTop: 15,
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  //modal
  modalView: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    flex: 1,
    margin: 40,
    width: "80%",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  modalImage: {
    marginTop: 10,
    height: "30%",
    width: "60%",
    borderRadius: 10,
  },
  modalText: {
    fontSize: 0.05 * SCREEN_WIDTH,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "black",
    paddingTop: 10,
    paddingHorizontal: 15,
    // textAlign: "justify",
  },
  modalTitle: {
    marginTop: 10,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "black",
    fontSize: 23,
    textAlign: "center"
  },
  modalBottom: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    minHeight: 60,
    paddingBottom: 5,
  },
});
