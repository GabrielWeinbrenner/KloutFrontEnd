import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

function BusinessSignIn1(props) {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" style={styles.textInput}></TextInput>
      <TextInput placeholder="Password" style={styles.textInput1}></TextInput>
      <View style={styles.rect}>
        <Text style={styles.signIn}>Sign In</Text>
      </View>
      <Text style={styles.logoHere}>LOGO HERE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 242,
    height: 53,
    marginTop: 295,
    marginLeft: 73
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 242,
    height: 53,
    marginTop: 16,
    marginLeft: 73
  },
  rect: {
    width: 189,
    height: 53,
    backgroundColor: "#E6E6E6",
    marginTop: 26,
    marginLeft: 99
  },
  signIn: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 19,
    marginLeft: 74
  },
  logoHere: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -374,
    marginLeft: 129
  }
});

export default BusinessSignIn1;
