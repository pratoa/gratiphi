import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../config/styles";
import colors from "../../config/colors";

const ListItemComponent = ({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  showChevrons,
}) => {
  return (
    <TouchableHighlight underlayColor={colors.primary} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.picture} source={image}></Image>}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
        </View>
        {showChevrons && (
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={colors.grey}
            style={styles.icon}
          />
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  picture: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
    ...defaultStyles.text,
  },
  subTitle: {
    color: colors.grey,
    fontSize: 15,
  },
});

export default ListItemComponent;
