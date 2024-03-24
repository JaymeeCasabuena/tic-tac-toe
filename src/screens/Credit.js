import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/Color";
import { SampleText } from "../constants/Text";
import TButton from '../components/TButton'
import Title from "../components/Title";
import Message from "../components/Message";


const Credit = () => {
    const navigation = useNavigation();
    const goToHome = () => {
      navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Title title="Credits"/>
            </View>
            <View style={styles.message}>
                <Message text={SampleText.Credits}/>
            </View>
            <View style={styles.buttons}>
                <TButton title="Back" onPress={goToHome}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.Cream,
    }, 
    title: {
        flexDirection: 'row',
        alignItems: "center",
        position: 'absolute',
        top: 10,
        paddingTop: 20,
      },
    message: {
        flexDirection: 'row',
        width: '80%',
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 50,
        top: 50,
      },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 40,
    }
  });

  export default Credit;