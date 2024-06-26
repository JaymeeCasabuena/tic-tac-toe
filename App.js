import { StyleSheet, Text, View } from "react-native";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Credit from "./src/screens/Credit";
import Rules from "./src/screens/Rules";
import { COLORS } from "./src/constants/Color";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Pixel: require("./assets/fonts/PixelifySansRegular.ttf"),
    Quantico: require("./assets/fonts/Quantico-Regular.ttf"),
    Oregano: require("./assets/fonts/Oregano-Regular.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={handleOnLayout}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerStyle: { backgroundColor: COLORS.Cream } }}
        >
          <Stack.Screen
            name="Tic Tac Toe"
            component={Home}
            options={{
              headerTitleStyle: { fontFamily: "Oregano", fontSize: 50 },
              headerTitleAlign: "center",
              headerTintColor: COLORS.Red,
            }}
          />
          <Stack.Screen
            name="Rules"
            component={Rules}
            options={{
              headerTitleAlign: "center",
              headerTintColor: COLORS.Red,
            }}
          />
          <Stack.Screen
            name="Credits"
            component={Credit}
            options={{
              headerTitleAlign: "center",
              headerTintColor: COLORS.Red,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
