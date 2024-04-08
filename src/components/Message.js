import { StyleSheet, Text, View, ScrollView } from "react-native";
import { COLORS } from "../constants/Color";

const Message = ({ text }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.textStyle}>{text}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Green,
    borderWidth: 2,
    borderColor: COLORS.Brown,
    borderRadius: 5,
    height: "90%",
  },
  textStyle: {
    fontSize: 16,
    fontFamily: "Quantico",
    padding: 10,
  },
});

export default Message;
