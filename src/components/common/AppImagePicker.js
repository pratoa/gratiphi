import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, Dimensions } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Storage } from "aws-amplify";
import AppButton from "./AppButton";

export function AppImagePicker({ uploadPath = null, useImage, setImage }) {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.4,
    });
    if (!result.cancelled) {
      let imageUri = result.uri;
      setImage(imageUri);
    }
  };

  const takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.4,
    });
    if (!result.cancelled) {
      let imageUri = result.uri;
      setImage(imageUri);
    }
  };

  const uploadPicture = async () => {
    if (useImage == null) {
      alert("Seleccione o tome una foto primero");
      return;
    }
    uploadImage(useImage);
  };

  async function uploadImage(imageUri) {
    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      if (uploadPath != null) {
        await Storage.put(uploadPath, blob, {
          contentType: "image/jpeg",
        });
        alert("Imagen subida satisfactoriamente");
      }
    } catch {
      alert("Hubo un error subiendo la imagen. Intente otra vez");
    }
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
      <AppButton title="Escoger Foto" onPress={pickImage} />
      <AppButton title="Tomar Foto" onPress={takeImage} />
      {useImage && <AppButton title="Subir Foto" onPress={uploadPicture} />}
    </View>
  );
}
