import React, { useState } from "react";
import { StyleSheet, Text, FlatList, Image, Modal, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { API, graphqlOperation, Storage } from "aws-amplify";
import Screen from "../../components/common/Screen";
import SignOutButton from "../../components/common/SignOutButton";
import ListItemSeparator from "../../components/common/ListItemSeparator";
import ListItemComponent from "../../components/common/ListItemComponent";
import * as customQueries from "../../../graphql/customQueries";
import { default as defaultStyle } from "../../config/styles";
import AppButton from "../../components/common/AppButton";
import { formatDate } from "../../utils/utils";
import CachedImage from "react-native-expo-cached-image";

export default function DoneeAdmin({ route, navigation, updateAuthState }) {
  const [gratificationHistory, setGratificationHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "",
    description: "",
    image: null,
  });
  const { donee, path, locationId } = route.params;
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

  useFocusEffect(
    React.useCallback(() => {
      async function getGratiphications() {
        try {
          const response = await API.graphql(
            graphqlOperation(customQueries.getGratificationHistoryByDoneeId, {
              doneeId: donee.id,
              sortDirection: "DESC",
            })
          );
          var gratificationHistory = await response.data
            .gratificationByDoneeByDate.items;
          setGratificationHistory(gratificationHistory);
        } catch (error) {
          console.log(error);
          alert(
            "Hubo un problema actulizando descargando la última informacion"
          );
        }
      }
      getGratiphications();
    }, [])
  );

  return (
    <>
      <Screen>
        <Text style={styles.title}>{donee.name}</Text>
        <Image source={{ uri: donee.profilePhoto }} style={styles.doneeImage} />
        {gratificationHistory.length == 0 && (
          <Text style={styles.subtitle}>
            Este Donatario no posee ninguna Gratificacion
          </Text>
        )}
        {gratificationHistory.length != 0 && (
          <Text style={styles.subtitle}>
            Últimas Gratificaciones a este donantario (presione para ver foto):
          </Text>
        )}
        <FlatList
          data={gratificationHistory}
          keyExtractor={(history) => history.id}
          renderItem={({ item }) => (
            <ListItemComponent
              title={formatDate(item.createdAt, "es")}
              onPress={async () => {
                const gratificationFoto = await Storage.get(
                  item.gratificationUrl
                );
                setModalInfo({
                  title: `Gratificacion ${formatDate(item.createdAt, "es")}`,
                  image: gratificationFoto,
                });
                setModalVisible(true);
              }}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
        <AppButton
          title="Crear Nueva Gratificacion"
          onPress={() =>
            navigation.navigate("PhotoUpload", {
              locationId: locationId,
              doneeId: donee.id,
              path: path,
            })
          }
        ></AppButton>
      </Screen>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>{modalInfo.title}</Text>
            <CachedImage
              resizeMode="contain"
              style={styles.modalImage}
              source={{ uri: modalInfo.image }}
            ></CachedImage>
            {/* <Text style={styles.subtitle}>{modalInfo.description}</Text> */}
            <View style={styles.modalBottom}>
              <AppButton
                title="Cerrar"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    ...defaultStyle.largeText,
    marginTop: 10,
  },
  subtitle: {
    fontWeight: "500",
    ...defaultStyle.text,
    textAlign: "left",
    marginLeft: 10,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  doneeImage: {
    margin: 20,
    width: defaultStyle.SCREEN_HEIGHT * 0.3,
    height: defaultStyle.SCREEN_HEIGHT * 0.3,
    borderRadius: (defaultStyle.SCREEN_HEIGHT * 0.3) / 2,
    alignSelf: "center",
  },
  //modal
  modalView: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  modalContainer: {
    margin: 20,
    width: "95%",
    height: "60%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: defaultStyle.colors.white,
    borderRadius: 10,
  },
  modalImage: {
    marginTop: 10,
    height: "70%",
    width: "80%",
    borderRadius: 10,
  },
  modalTitle: {
    marginTop: 10,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: defaultStyle.colors.black,
    fontSize: 23,
    textAlign: "center",
  },
  modalBottom: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    minHeight: 60,
    paddingBottom: 5,
  },
});
