import { NativeTabs } from "expo-router/build/native-tabs";

export default function RootLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Expo Map</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md="map" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="reactMap">
        <NativeTabs.Trigger.Label>React Map</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md="map_pin_heart" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
