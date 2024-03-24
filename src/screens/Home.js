import { StyleSheet, Text, View } from "react-native";
import Board from '../components/Board'
import TButton from '../components/TButton'
import Title from "../components/Title";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
         <Title title="Tic Tac Toe"/>
      </View>
      <View style={styles.board}>
         <Board/>
      </View>
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
      },
      board: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: 50,
        top: 50,
      },
      title: {
        flexDirection: 'row',
        alignItems: "center",
        position: 'absolute',
        top: 60,
        paddingTop: 50,
      },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 40,

    }
});