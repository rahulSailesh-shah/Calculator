import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import Toggler from "./components/Toggler";
import colors from "./utils/colors";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [equation, setEquation] = useState("");
  const [answer, setAnswer] = useState("");

  const colorTheme = theme === "light" ? colors.light : colors.dark;

  return (
    <View style={[styles.container, { backgroundColor: colorTheme.primary }]}>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
      <Toggler theme={theme} setTheme={setTheme} />
      <Display theme={theme} equation={equation} answer={answer} />
      <Keypad
        theme={theme}
        setAnswer={setAnswer}
        answer={answer}
        equation={equation}
        setEquation={setEquation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: "100%",
    height: "100%",
  },
});
