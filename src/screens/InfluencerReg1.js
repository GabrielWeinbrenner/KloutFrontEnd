import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function InfluencerReg1(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
      <Text style={styles.loremIpsum2}>
        Let&#39;s start with creating your account!
      </Text>
      <View style={styles.textInputRow}>
        <TextInput
          placeholder="First Name"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          placeholder="Last Name"
          style={styles.textInput1}
        ></TextInput>
      </View>
      <TextInput placeholder="Email" style={styles.textInput2}></TextInput>
      <TextInput
        placeholder="Phone Number"
        style={styles.textInput3}
      ></TextInput>
      <TextInput placeholder="Password" style={styles.textInput4}></TextInput>
      <View style={styles.textInput5Stack}>
        <TextInput placeholder="" style={styles.textInput5}></TextInput>
        <TextInput placeholder="City" style={styles.textInput6}></TextInput>
      </View>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum3}>Continue</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -16,
    marginLeft: 41
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 96,
    marginLeft: 42
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 143,
    height: 48
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 143,
    height: 48
  },
  textInputRow: {
    height: 48,
    flexDirection: "row",
    marginTop: 74,
    marginLeft: 41,
    marginRight: 48
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 267,
    height: 41,
    marginTop: 12,
    marginLeft: 41
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 286,
    height: 51,
    marginTop: 17,
    marginLeft: 41
  },
  textInput4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 286,
    height: 51,
    marginTop: 12,
    marginLeft: 41
  },
  textInput5: {
    top: 34,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 0,
    height: 0
  },
  textInput6: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 286,
    height: 51
  },
  textInput5Stack: {
    width: 286,
    height: 51,
    marginLeft: 41
  },
  rect: {
    width: 286,
    height: 50,
    backgroundColor: "#E6E6E6",
    marginTop: 84,
    marginLeft: 41
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 14,
    marginLeft: 106
  }
});

export default InfluencerReg1;
