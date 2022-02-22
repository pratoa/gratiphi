import React, { useState } from "react";

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
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Button,
} from "react-native";
import colors from "../../config/colors";
import AppButton from "../../components/common/AppButton";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const COST_PER_MEAL = 0.6;
const testImage = require("../../../assets/images/delta2.jpeg");
const alimentaLogo = require("../../../assets/images/alimentaLogo.png");
const alimentaRaya = require("../../../assets/images/Alimenta-Raya.jpg");

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
  const [modalInfo, setModalInfo] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [numberOfMeals, setNumberOfMeals] = useState(1);

  function subtractNumerOfMeals() {
    if (numberOfMeals > 1) {
      setNumberOfMeals(numberOfMeals - 1);
    }
  }

  function addNumerOfMeals() {
    setNumberOfMeals(numberOfMeals + 1);
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
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={alimentaRaya}
                style={styles.rayaStyle}
                imageStyle={{
                  resizeMode: "cover",
                }}
              >
                <Text style={styles.sectionTitle}>{ourMission.title}</Text>
              </ImageBackground>
              <View>
                <Text style={styles.missionText}>{ourMission.description}</Text>
              </View>

              <ImageBackground
                source={alimentaRaya}
                style={styles.rayaStyle}
                imageStyle={{
                  resizeMode: "cover",
                }}
              >
                <Text style={styles.sectionTitle}>Our Programs</Text>
              </ImageBackground>
            </View>
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
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={alimentaRaya}
                style={styles.rayaStyle}
                imageStyle={{
                  resizeMode: "cover",
                }}
              >
                <Text style={styles.sectionTitle}>Meal Calculator</Text>
              </ImageBackground>
              <View style={styles.mealCalculator}>
                <View style={styles.mealStats}>
                  <View style={styles.mealStat}>
                    <Text style={styles.mealNumber}>{numberOfMeals}</Text>
                    {numberOfMeals == 1 ? (
                      <Text style={styles.mealText}>plate of food = </Text>
                    ) : (
                      <Text style={styles.mealText}>plates of food = </Text>
                    )}
                    <Text style={styles.mealPrice}>
                      ${(numberOfMeals * COST_PER_MEAL).toFixed(2)}
                    </Text>
                  </View>
                  <View style={styles.mealStat}>
                    <Text style={styles.mealText}>Feed a child for</Text>
                    <Text style={styles.mealNumber}>{numberOfMeals}</Text>
                    {numberOfMeals == 1 ? (
                      <Text style={styles.mealText}>month: </Text>
                    ) : (
                      <Text style={styles.mealText}>months: </Text>
                    )}
                    <Text style={styles.mealPrice}>
                      ${(numberOfMeals * COST_PER_MEAL * 20).toFixed(2)}
                    </Text>
                  </View>
                </View>
                <View style={styles.mealButtons}>
                  <TouchableOpacity
                    style={styles.mealButton}
                    onPress={subtractNumerOfMeals}
                  >
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.mealButton}
                    onPress={addNumerOfMeals}
                  >
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
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
  image: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  rayaStyle: {
    marginTop: 10,
    marginBottom: 10,
    width: 0.6 * SCREEN_WIDTH,
    height: 0.03 * SCREEN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 0.05 * SCREEN_WIDTH,
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  missionText: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 0.04 * SCREEN_WIDTH,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    textAlign: "justify",
  },
  mealCalculator: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: colors.lightBlue,
  },
  mealStats: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mealStat: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  mealNumber: {
    marginHorizontal: 5,
    fontSize: 0.08 * SCREEN_WIDTH,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    textAlign: "justify",
  },
  mealPrice: {
    fontSize: 0.06 * SCREEN_WIDTH,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    textAlign: "justify",
  },
  mealText: {
    fontSize: 0.04 * SCREEN_WIDTH,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    textAlign: "justify",
  },
  mealButtons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mealButton: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    lineHeight: 50,
    color: colors.yellow,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: colors.transparent,
    borderRadius: 50,
    fontSize: 30,
    borderWidth: 2,
    borderColor: colors.primary,
    borderStyle: "solid",
    marginHorizontal: 20,
  },
  buttonText: {
    color: colors.black,
    fontSize: 0.034 * SCREEN_WIDTH,
    fontWeight: "bold",
    textTransform: "uppercase",
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
    textAlign: "center",
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
