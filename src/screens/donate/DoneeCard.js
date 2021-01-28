import React, { Component } from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from "react-native";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

export default class DoneeCard extends Component {
  constructor() {
    super();
    this.container = null;
  }

  render() {
    return (
      <View ref={(container) => (this.container = container)}>
        <TouchableWithoutFeedback
          onPress={() =>
            this.container.measure((fx, fy, width, height, px, py) => {
              this.props.selectCard(px, py, this.props.index);
            })
          }
        >
          <View style={styles.itemContainer}>
            <Image source={this.props.item.image} style={styles.doneeImage} />
            <View style={styles.textContainer}>
              <Text style={styles.doneeText}>{this.props.item.name}</Text>
              <Text style={styles.doneeText}>{this.props.item.biography}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: "99%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2c300",
    borderRadius: 20,
  },
  doneeImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "rgba(0,0,0,.6)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  doneeText: {
    color: "white",
  },
});
