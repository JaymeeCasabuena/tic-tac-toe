import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/Color";
import { SampleText } from "../constants/Text";
import TButton from "../components/TButton";
import Title from "../components/Title";
import Message from "../components/Message";

const Credit = () => {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate("Tic Tac Toe");
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title title="Credits" />
      </View>
      <View style={styles.message}>
        <Message text={SampleText.Credits} />
      </View>
      <View style={styles.buttons}>
        <TButton title="Back" onPress={goToHome} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.Cream,
    paddingTop: 90,
    paddingBottom: 40,
  },
  title: {
    marginTop: 40,
  },
  message: {
    width: "80%",
    marginTop: 70,
  },
  buttons: {
    marginBottom: 100,
  },
});

export default Credit;
