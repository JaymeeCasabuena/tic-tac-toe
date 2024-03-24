import { StyleSheet, Text, View } from "react-native";
import Board from '../components/Board'
import TButton from '../components/TButton'

export default function App() {
  return (
    <View style={styles.container}>
      <Board/>
      <View style={styles.buttons}>
      <TButton title="Rules"/>
      <TButton title="Credits"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 30,

    }
});