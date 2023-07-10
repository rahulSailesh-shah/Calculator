import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SunIcon } from "react-native-heroicons/outline";
import { MoonIcon } from "react-native-heroicons/outline";
import React from "react";
import colors from "../utils/colors";

const Toggler = ({ theme, setTheme }) => {
  const colorTheme = theme === "light" ? colors.light : colors.dark;
  return (
    <View>
      <View style={styles.container}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: colorTheme.secondary },
          ]}
        >
          <TouchableOpacity onPress={() => setTheme("light")}>
            <SunIcon
              style={styles.sunIcon}
              size="25"
              color={theme === "light" ? colorTheme.black : colorTheme.gray}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setTheme("dark")}>
            <MoonIcon
              style={styles.moonIcon}
              size="25"
              color={theme === "dark" ? colorTheme.white : colorTheme.gray}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Toggler;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    padding: 8,
    borderRadius: 15,
  },
  sunIcon: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },
  moonIcon: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
