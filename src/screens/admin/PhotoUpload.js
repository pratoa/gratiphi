import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Screen from "../../components/common/Screen";
import SignOutButton from "../../components/common/SignOutButton";
import { default as defaultStyle } from "../../config/styles";
import { AppImagePicker } from "../../components/common/AppImagePicker";

export default function PhotoUpload({ route, navigation, updateAuthState }) {
  const [image, setImage] = useState(null);
  const avatar = require("../../../assets/images/avatar.png");
  const { path, doneeId, locationId } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SignOutButton
          updateAuthState={updateAuthState}
          navigation={navigation}
        />
      ),
    });
  }, [navigation]);

  return (
    <Screen>
      <View>
        {!image && <Image source={avatar} style={styles.imageStyle} />}
        {image && <Image source={{ uri: image }} style={styles.imageStyle} />}
      </View>
      <AppImagePicker
        doneeId={doneeId}
        locationId={locationId}
        uploadPath={path}
        useImage={image}
        setImage={setImage}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    ...defaultStyle.largeText,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  imageStyle: {
    margin: 20,
    width: defaultStyle.SCREEN_WIDTH * 0.8,
    height: defaultStyle.SCREEN_HEIGHT * 0.6,
    resizeMode: "contain",
    alignSelf: "center",
    justifyContent: "center",
  },
});
