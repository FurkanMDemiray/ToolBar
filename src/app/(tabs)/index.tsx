import { AppleMaps, GoogleMaps } from "expo-maps";
import React, { useMemo, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const markers = useMemo(() => {
    if (!selectedLocation) {
      return [];
    }

    return [
      {
        id: "selected-location",
        coordinates: selectedLocation,
        title: "Selected location",
      },
    ];
  }, [selectedLocation]);

  const saveLocation = (coordinates: {
    latitude?: number;
    longitude?: number;
  }) => {
    if (
      typeof coordinates.latitude !== "number" ||
      typeof coordinates.longitude !== "number"
    ) {
      return;
    }

    setSelectedLocation({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    });
  };

  if (Platform.OS === "ios") {
    return (
      <View style={styles.container}>
        <AppleMaps.View
          style={styles.map}
          markers={markers}
          onMapClick={(event) => saveLocation(event.coordinates)}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            {selectedLocation
              ? `Lat: ${selectedLocation.latitude.toFixed(6)}, Lng: ${selectedLocation.longitude.toFixed(6)}`
              : "Tap on the map to select a location"}
          </Text>
        </View>
      </View>
    );
  } else if (Platform.OS === "android") {
    return (
      <View style={styles.container}>
        <GoogleMaps.View
          style={styles.map}
          markers={markers}
          onMapClick={(event) => saveLocation(event.coordinates)}
          cameraPosition={{
            coordinates: {
              latitude: 37.78825,
              longitude: -122.4324,
            },
            zoom: 15,
          }}
        />
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            {selectedLocation
              ? `Lat: ${selectedLocation.latitude.toFixed(6)}, Lng: ${selectedLocation.longitude.toFixed(6)}`
              : "Tap on the map to select a location"}
          </Text>
        </View>
      </View>
    );
  } else {
    return <Text>Maps are only available on Android and iOS</Text>;
  }
}

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
