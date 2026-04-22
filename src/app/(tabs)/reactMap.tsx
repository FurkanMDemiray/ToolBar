import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const reactMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(event) => setSelectedLocation(event.nativeEvent.coordinate)}
      >
        {selectedLocation && (
          <Marker coordinate={selectedLocation} title="Selected location" />
        )}
      </MapView>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          {selectedLocation
            ? `Lat: ${selectedLocation.latitude.toFixed(6)}, Lng: ${selectedLocation.longitude.toFixed(6)}`
            : "Tap on the map to select a location"}
        </Text>
      </View>
    </View>
  );
};

export default reactMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoBox: {
    position: "absolute",
    bottom: 24,
    left: 16,
    right: 16,
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
  },
  infoText: {
    color: "#fff",
    fontSize: 14,
  },
});
