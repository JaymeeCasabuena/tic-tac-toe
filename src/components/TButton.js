import { StyleSheet, Text, TouchableOpacity } from "react-native";


const button = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
      width: '45%',  
      backgroundColor: "#BE5D27",
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 2,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: 'white',
      fontSize: 20,
      fontFamily: 'Pixel'
      }
  });

  export default button;