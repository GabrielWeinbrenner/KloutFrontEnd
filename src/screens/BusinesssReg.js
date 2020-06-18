import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function BusinesssReg(props) {
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
      <View style={styles.textInput4Stack}>
        <TextInput placeholder="Password" style={styles.textInput4}></TextInput>
        <TextInput placeholder="" style={styles.textInput5}></TextInput>
      </View>
      <TextInput
        placeholder="City of Company"
        style={styles.textInput6}
      ></TextInput>
      <TextInput
        placeholder="Company Name"
        style={styles.textInput7}
      ></TextInput>
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
    marginTop: 82,
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
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 286,
    height: 51
  },
  textInput5: {
    top: 15,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 0,
    height: 0
  },
  textInput4Stack: {
    width: 286,
    height: 51,
    marginTop: 12,
    marginLeft: 41
  },
  textInput6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 286,
    height: 51,
    marginLeft: 41
  },
  textInput7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 267,
    height: 41,
    marginTop: -283,
    marginLeft: 41
  }
});

export default BusinesssReg;
