import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/Color";

const Title = ({ title }) => {
  return (
    <View style={styles.titleBox}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleBox: {
    backgroundColor: COLORS.Red,
    borderRadius: 10,
    borderColor: COLORS.Brown,
    borderWidth: 2,
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 40,
    fontFamily: "Oregano",
  },
});

export default Title;
