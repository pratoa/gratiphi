import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import DoneeCard from "./DoneeCard";
// import xIcon from "./images/close-x.png";

const ELEMENT_HEIGHT = 200;

export default class ExpandedCard extends Component {
  state = { animatedValue: new Animated.Value(0) };
  render() {
    const { height: windowHeight } = Dimensions.get("window");
    const topTranslate = this.getTranslate([this.props.yOffset, 0]);
    const leftTranslate = this.getTranslate([this.props.xOffset, 0]);
    const rightTranslate = this.getTranslate([this.props.xOffset, 0]);
    const bottomTranslate = this.getTranslate([
      windowHeight - this.props.yOffset - ELEMENT_HEIGHT,
      0,
    ]);

    return (
      <Animated.View
        style={[
          {
            position: "absolute",
            top: topTranslate,
            left: leftTranslate,
            right: rightTranslate,
            bottom: bottomTranslate,
            backgroundColor: "#5cdb95",
          },
        ]}
      >
        <TouchableWithoutFeedback onPress={this.unselectCard}>
          <Text>Hello world</Text>
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }

  componentDidMount() {
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }
  unselectCard = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => this.props.updateSelectedCard(null));
  };
  getTranslate = (outputRange) => {
    return this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange,
    });
  };
}

{
  /* <Animated.Image
            source={xIcon}
            style={[
              {
                position: "absolute",
                top: 60,
                right: 60,
                zIndex: 100,
                opacity: this.getTranslate([0, 1]),
              },
            ]}
          /> */
}
