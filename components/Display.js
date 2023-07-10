import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/colors";

const Display = ({ theme, equation, answer }) => {
  const colorTheme = theme === "light" ? colors.light : colors.dark;
  const textColor =
    theme === "light" ? colors.dark.primary : colors.light.primary;

  return (
    <View style={[styles.container, { backgroundColor: colorTheme.primary }]}>
      <Text style={[styles.eqnText, { color: textColor }]}>{equation}</Text>
      <Text style={[styles.ansText, { color: textColor }]}>{answer}</Text>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "25%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  eqnText: {
    fontSize: 24,
    marginBottom: 10,
  },

  ansText: {
    fontSize: 48,
    fontWeight: "600",
  },
});
