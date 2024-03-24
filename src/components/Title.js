import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/Color";


const Title = ({title}) => {
    return (
        <View style={styles.titleBox}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    titleBox: {
      backgroundColor: COLORS.Red,
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 2,
      padding: 10,
    },
    text: {
      color: 'white',
      fontSize: 30,
      fontFamily: 'Pixel'
      }
  });

  export default Title;