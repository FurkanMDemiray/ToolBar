import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { Linking, Platform } from "react-native";

const openGoogleMaps = async (
  lat: number,
  lng: number,
  label?: string,
): Promise<void> => {
  const encodedLabel = label ? encodeURIComponent(label) : "";

  const scheme = Platform.select({
    ios: `maps:0,0?q=${encodedLabel}@${lat},${lng}`,
    android: `geo:0,0?q=${lat},${lng}${label ? `(${encodedLabel})` : ""}`,
  });

  const url = Platform.select({
    ios: `comgooglemaps://?q=${lat},${lng}&zoom=14`,
    android: scheme as string,
  }) as string;

  try {
    const isSupported = await Linking.canOpenURL(url);

    if (isSupported) {
      await Linking.openURL(url);
    } else {
      const browserUrl = `https://google.com{lat},${lng}`;
      await Linking.openURL(browserUrl);
    }
  } catch (error) {
    console.error("Harita açılırken bir hata oluştu:", error);
  }
};

const nativeMapApp = () => {
  useFocusEffect(
    useCallback(() => {
      openGoogleMaps(37.78825, -122.4324, "Selected location");

      return;
    }, []),
  );
};

export default nativeMapApp;
