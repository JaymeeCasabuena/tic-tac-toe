import { StyleSheet, Text, View } from "react-native";
import { useCallback } from "react";
import Home from './src/screens/Home';
import { COLORS } from "./src/constants/Color";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts ({
    "Pixel": require('./assets/fonts/PixelifySansRegular.ttf')
  })

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
      <Home/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Cream,
    alignItems: "center",
    justifyContent: "center",
  }
});
