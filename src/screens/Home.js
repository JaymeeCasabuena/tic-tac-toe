import { StyleSheet, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Board from "../components/Board";
import TButton from "../components/TButton";
import Title from "../components/Title";
import { COLORS } from "../constants/Color";

export default function Home() {
  const navigation = useNavigation();
  const goToRules = () => {
    navigation.navigate("Rules");
  };
  const goToCredits = () => {
    navigation.navigate("Credits");
  };
  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        {/* <View style={styles.title}>
          <Title title="Tic Tac Toe" />
        </View> */}
        <View style={styles.board}>
          <Board />
        </View>
        <View style={styles.buttons}>
          <TButton title="Rules" onPress={goToRules} />
          <View style={styles.spacer} />
          <TButton title="Credits" onPress={goToCredits} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.Cream,
  },
  layout: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
  },
  spacer: {
    width: 10,
  },
});
