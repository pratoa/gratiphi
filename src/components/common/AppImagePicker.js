import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Storage } from "aws-amplify";
import Constants from "expo-constants";

class AppImage {
  constructor(title, uri, type) {
    this.title = title;
    this.uri = uri;
    this.type = type;
  }
}

export function AppImagePicker() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      let imageUriAsArray = result.uri.split("/");
      let imageName = imageUriAsArray[imageUriAsArray.length - 1];
      let image = new AppImage(imageName, result.uri);
      uploadImage(image);
      setImage(result.uri);
    }
  };

  async function uploadImage(image) {
    try {
      const response = await fetch(image.uri);
      const blob = await response.blob();
      await Storage.put(image.title, blob, {
        contentType: "image/jpeg",
      });
    } catch {
      console.log(`Cannot uploading file: ${err}`);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Pick an image from camera roll" onPress={pickImage} />
    </View>
  );
}
