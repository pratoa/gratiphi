import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Moment from "moment";
import { default as defaultStyle } from "../../../config/styles";
import colors from "../../../config/colors";

export default function InProgressItem(donation) {
  console.log("INPROGRESS: ", donation);

  return (
    <TouchableWithoutFeedback
      // underlayColor={colors.primary}
      onPress={() => {
        alert("clicked!");
      }}
    >
      <View style={styles.mainCardView}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.subCardView}>
            <Image
              source={{ uri: donation.item.donee.profilePhotoUrl }}
              // resizeMode="contain"
              style={{
                borderRadius: 25,
                height: defaultStyle.SCREEN_WIDTH * 0.25,
                width: defaultStyle.SCREEN_WIDTH * 0.25,
              }}
            />
          </View>
          <View style={{ marginLeft: 12 }}>
            <Text
              style={{
                fontSize: 14,
                color: colors.black,
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {donation.item.donee.firstName}
            </Text>
            <View
              style={{
                marginTop: 4,
                borderWidth: 0,
                width: "85%",
              }}
            >
              <Text
                style={{
                  color: colors.gray,
                  fontSize: 12,
                }}
              >
                Donation: ${Math.round(donation.item.amount / 100).toFixed(2)}
              </Text>
              <Text
                style={{
                  color: colors.gray,
                  fontSize: 12,
                }}
              >
                Date: {Moment(donation.item.createdAt).format("MM/DD/YYYY")}
              </Text>
            </View>
          </View>
        </View>
        {/* <View
            style={{
              height: 25,
              backgroundColor: colors.pink,
              borderWidth: 0,
              width: 25,
              marginLeft: -26,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <Text style={{ color: colors.white }}>
              {item.unread_messages_count}
            </Text>
          </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
    width: "100%",
  },
  flatListContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.white,
  },
  mainCardView: {
    height: defaultStyle.SCREEN_WIDTH * 0.3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 15,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    // height: 50,
    // width: 50,
    // borderRadius: 25,
    // backgroundColor: colors.red,
    // borderColor: colors.yellow,
    // borderWidth: 1,
    // borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex: 2,
    // flex: 1,
    // flexDirection: "row",
    // marginTop: 5,
    backgroundColor: "red",
  },
  sectionTitle: {
    fontWeight: "bold",
    marginLeft: 10,
    ...defaultStyle.largeText,
  },
  picture: {
    flex: 1,
  },
  itemText: {
    flex: 3,
    // backgroundColor: "pink",
    marginLeft: 5,
  },
  itemButton: {
    alignSelf: "center",
    backgroundColor: "yellow",
  },
  button: {
    fontSize: 5,
  },
});
