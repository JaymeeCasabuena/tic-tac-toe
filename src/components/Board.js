import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/Color";


const tiles = ["0", "0", "X", "X", "0", "", "X", "", "0"];

export default function Board () {
  return (
      <View style={[styles.outerDiv, styles.outerBorders]}>
        {tiles.map((t, i) => (
          <View style={styles.squares} key={i}>
            <Text style={styles.text}>{t}</Text>
          </View>
        ))}
      </View>
  )
}


const styles = StyleSheet.create({
    outerDiv: {
      backgroundColor: COLORS.Yellow,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: 300,
      height: 300,
      padding: 25,
    },
    squares: {
      width: "33.33%",
      height: "33.33%",
      backgroundColor: COLORS.Green,
      borderColor: "#000000",
      borderWidth: 2,
    },
    outerBorders: {
      borderWidth: 1,
      borderColor: "#000000",
      borderRadius: 10,
    },
    text: {
      position: "absolute",
      width: "100%",
      textAlign: "center",
      fontSize: 60,
      color: "black",
      fontFamily: 'Pixel'
    },
  });