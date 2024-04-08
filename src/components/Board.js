import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../constants/Color";
import gameLogic from "../datamodel/Game";

export default function Board() {
  const {
    currentBoardState,
    history,
    handleChange,
    newGame,
    previousMove,
    nextMove,
    currentMove,
    currentPlayer,
  } = gameLogic();
  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={previousMove}
          disabled={currentMove === 0}
          style={[
            currentMove === 0
              ? [styles.arrowButtons, { backgroundColor: "gray" }]
              : styles.arrowButtons,
          ]}
        >
          <Text style={styles.buttonText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={newGame}
          disabled={history.length === 1}
          style={[
            history.length === 1
              ? [styles.button, { backgroundColor: "gray" }]
              : styles.button,
          ]}
        >
          <Text style={styles.buttonText}>{"New Game"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={nextMove}
          disabled={currentMove >= history.length - 1}
          style={[
            currentMove >= history.length - 1
              ? [styles.arrowButtons, { backgroundColor: "gray" }]
              : styles.arrowButtons,
          ]}
        >
          <Text style={styles.buttonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.outerDiv, styles.outerBorders]}>
        {currentBoardState.map((t, i) => (
          <View style={styles.squares} key={i}>
            <TouchableOpacity
              onPress={() => handleChange(i)}
              disabled={t !== ""}
            >
              <Text style={styles.text}>{t}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.player}>Current Player: {currentPlayer}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerDiv: {
    backgroundColor: COLORS.Yellow,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: 300,
    height: 300,
    padding: 25,
  },
  squares: {
    width: "33.33%",
    height: "33.33%",
    backgroundColor: COLORS.Green,
    borderColor: COLORS.Brown,
    borderWidth: 2,
  },
  outerBorders: {
    borderWidth: 1,
    borderColor: COLORS.Brown,
    borderRadius: 10,
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontSize: 60,
    color: COLORS.Cream,
    fontFamily: "Oregano",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 50,
  },
  button: {
    backgroundColor: COLORS.Blue,
    width: 150,
    height: 35,
    borderColor: COLORS.Yellow,
    borderWidth: 2,
    borderRadius: 10,
  },
  disabled: {
    backgroundColor: "gray",
  },
  arrowButtons: {
    backgroundColor: COLORS.Blue,
    width: 50,
    height: 35,
    borderColor: COLORS.Yellow,
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "Oregano",
    alignSelf: "center",
    textAlignVertical: "center",
    fontSize: 24,
    color: COLORS.Cream
  },
  player: {
    fontFamily: "Oregano",
    fontSize: 22,
    color: COLORS.Red
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});
