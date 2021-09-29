import React, { useEffect, useState } from "react";
import { View, Platform, ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { API, Storage } from "aws-amplify";
import AppButton from "./AppButton";

const createGratification = /* GraphQL */ `
  mutation CreateGratification($input: CreateGratificationInput!) {
    createGratification(input: $input) {
      id
    }
  }
`;

export function AppImagePicker({
  locationId,
  doneeId,
  uploadPath,
  useImage,
  setImage,
}) {
  const [isLoading, setIsLoading] = useState(false);
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

  const uploadPicture = () => {
    if (useImage == null) {
      alert("Seleccione o tome una foto primero");
      return;
    }
    setIsLoading(true);
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
        await API.graphql({
          query: createGratification,
          variables: {
            input: {
              doneeId: doneeId,
              locationId: locationId,
              gratificationUrl: uploadPath,
            },
          },
        });
      }
    } catch {
      alert("Hubo un error subiendo la imagen. Intente otra vez");
    }
    setIsLoading(false);
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
      {isLoading && <ActivityIndicator size="large" />}
      <AppButton title="Escoger Foto" onPress={() => pickImage()} />
      <AppButton title="Tomar Foto" onPress={() => takeImage()} />
      {!isLoading && useImage && (
        <AppButton title="Subir Foto" onPress={() => uploadPicture()} />
      )}
    </View>
  );
}
