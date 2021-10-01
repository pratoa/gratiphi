import React, { useEffect, useState } from "react";
import { View, Platform, ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { API, Storage, graphqlOperation } from "aws-amplify";
import AppButton from "./AppButton";
import * as customQueries from "../../../graphql/customQueries";

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
  const [canUpload, setCanUpload] = useState(false);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert(
            "Disculpe, se require activar los permisos para acceder a la libreria de fotos"
          );
        }
      }
    })();
  }, []);
  useEffect(() => {
    async function getExistingImages() {
      try {
        const response = await API.graphql(
          graphqlOperation(customQueries.getExistingGratificationsWithURL, {
            gratificationUrl: uploadPath,
          })
        );
        var gratificationHistory = await response.data.gratificationByUrl.items;
        setCanUpload(gratificationHistory.length == 0);
      } catch (error) {
        console.log(error);
        alert("Hubo un problema descargando la última informacion");
      }
    }
    getExistingImages();
  }, [useImage]);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert(
            "Disculpe, se require activar los permisos para acceder a la camara"
          );
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
        if (canUpload) {
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
        } else {
          alert(
            "La gratificacion para este usuario ya fue realizada previamente el dia de hoy"
          );
        }
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
