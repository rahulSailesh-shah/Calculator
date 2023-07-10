import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BackspaceIcon } from "react-native-heroicons/outline";
import colors from "../utils/colors";

const Keypad = ({ theme, setAnswer, answer, equation, setEquation }) => {
  const colorTheme = theme === "light" ? colors.light : colors.dark;

  const evaluateAnswer = (opr = "") => {
    const oprExists =
      answer.includes("+") ||
      answer.includes("-") ||
      answer.includes("×") ||
      answer.includes("÷") ||
      answer.includes("%");

    const lastDigitIsOperator = isNaN(answer[answer.length - 1]);

    if (lastDigitIsOperator || !oprExists) return;

    const operator = answer.includes("+")
      ? "+"
      : answer.includes("-")
      ? "-"
      : answer.includes("×")
      ? "×"
      : answer.includes("÷")
      ? "÷"
      : answer.includes("%")
      ? "%"
      : "";

    let termOne = answer.split(operator)[0];
    let termTwo = answer.split(operator)[1];

    termOne = termOne.startsWith("−") ? -termOne.slice(1) : +termOne;
    termTwo = termTwo.startsWith("−") ? -termTwo.slice(1) : +termTwo;

    let result;
    switch (operator) {
      case "+":
        result = termOne + termTwo;
        break;
      case "-":
        result = termOne - termTwo;
        break;
      case "÷":
        result = termOne / termTwo;
        break;
      case "×":
        result = termOne * termTwo;
        break;
      case "%":
        result = termOne % termTwo;
        break;
      default:
        break;
    }

    setEquation(answer);
    if (opr === "") {
      if (result < 0) setAnswer("−" + result.toString().slice(1));
      else setAnswer(result.toString());
    } else {
      if (result < 0) setAnswer("−" + result.toString().slice(1) + opr);
      else setAnswer(result.toString() + opr);
    }
  };

  const chooseOperator = (opr) => {
    if (answer === "") return;

    const oprExists =
      answer.includes("+") ||
      answer.includes("-") ||
      answer.includes("×") ||
      answer.includes("÷") ||
      answer.includes("%");

    const lastDigitIsOperator = isNaN(answer[answer.length - 1]);

    if (oprExists && answer !== "" && !lastDigitIsOperator) {
      evaluateAnswer(opr);
    } else {
      lastDigitIsOperator
        ? setAnswer(answer.slice(0, -1) + opr)
        : setAnswer(answer + opr);
    }
  };

  const checkSign = (posn) => {
    if (posn === "last") {
      const sign = answer[answer.length - 1];
      if (sign === "−") return "−";
      else return "";
    } else {
      const sign = answer[0];
      if (sign === "−") return "−";
      else return "";
    }
  };

  const changeSign = () => {
    const oprExists =
      answer.includes("+") ||
      answer.includes("-") ||
      answer.includes("×") ||
      answer.includes("÷") ||
      answer.includes("%");

    const lastDigitIsOperator = isNaN(answer[answer.length - 1]);

    if (oprExists && !lastDigitIsOperator) {
      return;
    } else if (oprExists && lastDigitIsOperator) {
      const signType = checkSign("last");
      signType === ""
        ? setAnswer(answer + "−")
        : setAnswer(answer.slice(0, -1));
    } else {
      const signType = checkSign("first");
      signType === ""
        ? setAnswer("−" + answer)
        : setAnswer(answer.slice(1, answer.length));
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colorTheme.secondary }]}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            setAnswer("");
            setEquation("");
          }}
        >
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.green }]}>AC</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeSign()}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.green }]}>
              &#177;
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => chooseOperator("%")}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.green }]}>%</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => chooseOperator("÷")}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.red }]}>÷</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => setAnswer(answer + "7")}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.keyColor }]}>7</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAnswer(answer + "8")}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.keyColor }]}>8</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAnswer(answer + "9")}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.keyColor }]}>9</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => chooseOperator("×")}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.red }]}>×</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => setAnswer(answer + "4")}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.keyColor }]}>4</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAnswer(answer + "5")}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.keyColor }]}>5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAnswer(answer + "6")}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.keyColor }]}>6</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => chooseOperator("-")}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.red }]}>-</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => setAnswer(answer + "1")}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.keyColor }]}>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAnswer(answer + "2")}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.keyColor }]}>2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAnswer(answer + "3")}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.keyColor }]}>3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => chooseOperator("+")}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.red }]}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => setAnswer(answer.slice(0, -1))}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <BackspaceIcon color={colorTheme.keyColor} />
          </View>
        </TouchableOpacity>

        <View
          style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
        >
          <Text style={[styles.text, { color: colorTheme.keyColor }]}>0</Text>
        </View>
        <View
          style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
        >
          <Text style={[styles.text, { color: colorTheme.keyColor }]}>
            &#x2022;
          </Text>
        </View>
        <TouchableOpacity onPress={() => evaluateAnswer()}>
          <View
            style={[styles.column, { backgroundColor: colorTheme.keyBgColor }]}
          >
            <Text style={[styles.text, { color: colorTheme.red }]}>=</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Keypad;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "700%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 25,
  },

  column: {
    borderRadius: 15,
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "400",
  },
});
