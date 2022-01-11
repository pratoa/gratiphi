import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Moment from "moment";
import { FontAwesome5 } from "@expo/vector-icons";
import { default as defaultStyle } from "../../../config/styles";
import colors from "../../../config/colors";

export default function CompletedItem({ navigation, donation, userId }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("CompletedItemExpanded", {
          donation: donation,
          userId: userId,
        });
      }}
    >
      <View style={styles.mainCardView}>
        <View
          style={{
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <View style={styles.subCardView}>
            <Image
              source={{ uri: donation.gratificationUrl }}
              resizeMode="cover"
              style={{
                borderRadius: 15,
                height: "100%",
                width: "100%",
              }}
            />
          </View>
          <View
            style={{
              marginLeft: 0,
              marginBottom: 5,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: colors.black,
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {donation.donee.firstName}
            </Text>
            <View
              style={{
                marginTop: 4,
                borderWidth: 0,
                width: "100%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 5,
                  alignItems: "center",
                }}
              >
                <FontAwesome5
                  name={"gratipay"}
                  size={Math.round(defaultStyle.SCREEN_WIDTH * 0.05)}
                  color={colors.primary}
                />
                <Text
                  style={{
                    color: colors.gray,
                    fontSize: 12,
                    marginLeft: 5,
                  }}
                >
                  Donation:
                </Text>
                <Text
                  style={{
                    color: colors.gray,
                    fontSize: 12,
                    marginLeft: 5,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  ${Math.round(donation.amount / 100).toFixed(2)}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome5
                  name={"calendar-alt"}
                  size={Math.round(defaultStyle.SCREEN_WIDTH * 0.05)}
                  color={colors.primary}
                />
                <Text
                  style={{
                    color: colors.gray,
                    fontSize: 12,
                    marginLeft: 5,
                  }}
                >
                  Date:
                </Text>
                <Text
                  style={{
                    color: colors.gray,
                    fontSize: 12,
                    marginLeft: 5,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  {Moment(donation.createdAt).format("MM/DD/YYYY")}
                </Text>
              </View>
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
    height: defaultStyle.SCREEN_WIDTH * 0.65,
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
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 5,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    height: "65%",
    width: "100%",
    borderRadius: 15,
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
});
