import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import AppButton from "./../../../components/common/AppButton";
import { default as defaultStyle } from "../../../config/styles";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react/cjs/react.development";
import Moment from "moment";
import colors from "./../../../config/colors";
import Carousel from "react-native-snap-carousel";
import { Pagination } from "react-native-snap-carousel";

export default function CompletedItemExpanded({ route }) {
  const [index, setIndex] = useState(0);
  const [shouldExpandImage, setShouldExpandImage] = useState(false);
  const [donation, setDonations] = useState(route.params.donation);
  const [userId, setUserId] = useState(route.params.userId);
  const donateUrl = `http://gratiphi.org/donate/${userId}/${donation.donee.id}`;
  var photos = [];
  photos.push(donation.gratificationUrl);
  photos.push(donation.donee.profilePhotoUrl);

  function renderItem({ item, index }) {
    return (
      <TouchableWithoutFeedback>
        <Image source={{ uri: item }} style={styles.doneeImage} />
      </TouchableWithoutFeedback>
    );
  }

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
        <View style={{ alignItems: "center" }}>
          <Carousel
            data={photos}
            renderItem={renderItem}
            sliderWidth={defaultStyle.SCREEN_WIDTH}
            itemWidth={defaultStyle.SCREEN_WIDTH}
            layout={"default"}
            onSnapToItem={(index) => setIndex(index)}
            enableSnap={true}
            loop={false}
            enableMomentum={true}
          />
          <Pagination
            dotsLength={photos.length}
            activeDotIndex={index}
            containerStyle={{
              position: "absolute",
              bottom: 0,
            }}
            dotStyle={{
              width: 5,
              height: 5,
              borderRadius: 5,
              backgroundColor: colors.white,
            }}
            inactiveDotStyle={
              {
                // Define styles for inactive dots here
              }
            }
            inactiveDotOpacity={0.8}
            inactiveDotScale={0.6}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.doneeName}>Donation details</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5
              name={"dollar-sign"}
              size={defaultStyle.SCREEN_WIDTH * 0.045}
              color={colors.grey}
            />
            <Text style={styles.infoText}>
              {Math.round(donation.amount / 100).toFixed(2)}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5
              name={"calendar-alt"}
              size={defaultStyle.SCREEN_WIDTH * 0.045}
              color={colors.grey}
            />
            <Text style={styles.infoText}>
              {Moment(donation.createdAt).format("MM/DD/YYYY")}
            </Text>
          </View>

          <Text style={styles.doneeName}>
            {donation.donee.firstName} {donation.donee.lastName}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5
              name={"map-marker-alt"}
              size={defaultStyle.SCREEN_WIDTH * 0.045}
              color={colors.grey}
            />
            <Text style={styles.infoText}>{donation.location.name}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5
              name={"birthday-cake"}
              size={defaultStyle.SCREEN_WIDTH * 0.045}
              color={colors.grey}
            />
            <Text style={styles.infoText}>{donation.donee.age} years old</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"Donate Again"}
          onPress={() => Linking.openURL(donateUrl)}
        ></AppButton>
      </View>
      <Modal
        visible={shouldExpandImage}
        transparent={true}
        onRequestClose={() => this.setState({ modalVisible: false })}
      >
        <Image imageUrls={photos} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  doneeImage: {
    width: "90%",
    height: defaultStyle.SCREEN_HEIGHT * 0.45,
    borderRadius: 20,
    alignSelf: "center",
  },
  detailsContainer: {
    paddingLeft: 20,
  },
  doneeName: {
    marginTop: 10,
    fontWeight: "bold",
    ...defaultStyle.largeText,
  },
  infoConatiner: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  infoText: {
    paddingLeft: 10,
    color: colors.grey,
    ...defaultStyle.mediumText,
  },
  doneeSection: {
    marginTop: 5,
    fontWeight: "bold",
    ...defaultStyle.mediumText,
  },
  questionsContainer: {
    paddingLeft: 20,
    marginTop: 5,
  },
  questionNumber: {
    fontWeight: "500",
    ...defaultStyle.smallText,
  },
  question: {
    ...defaultStyle.smallText,
  },
  answer: {
    fontWeight: "700",
    ...defaultStyle.smallText,
  },
  doneeLongBiography: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    textAlign: "justify",
    color: colors.primary,
  },
  buttonContainer: {
    backgroundColor: colors.white,
    alignItems: "center",
  },
});
