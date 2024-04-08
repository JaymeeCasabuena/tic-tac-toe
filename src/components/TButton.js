import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants/Color";

const button = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "40%",
    backgroundColor: COLORS.Teal,
    borderRadius: 10,
    borderColor: COLORS.Brown,
    borderWidth: 2,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 26,
    fontFamily: "Oregano",
  },
});

export default button;
