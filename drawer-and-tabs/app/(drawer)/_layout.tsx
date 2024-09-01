import { Drawer } from "expo-router/drawer";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function Layout() {
  const insets = useSafeAreaInsets();

//   const navigation = useNavigation();
// // const pathname = usePathname();

// useEffect(() => {
//   console.log(
//     // .routes[0].state?.history
//     JSON.stringify(navigation.getState(), null, 2)
//   );
// }, []);

  return (
    <Drawer
      drawerContent={() => {
        return (
          <View
            style={{
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              padding: 24,
              gap: 16,
            }}
          >
            <Text style={styles.text}>
              Hello from the drawer 👋
            </Text>
          </View>
        );
      }}
      screenOptions={{
        drawerType: "slide",
        drawerPosition: "right",
        header: () => null,
      }}
    >
      <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 30,
  },
});
