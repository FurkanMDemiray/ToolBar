import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

const reactMap = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default reactMap;

const styles = StyleSheet.create({});
