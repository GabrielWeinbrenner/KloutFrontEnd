import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

function AddProduct(props) {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Shippable?" style={styles.textInput}></TextInput>
      <Text style={styles.otherShit}>Enter your product details here:</Text>
      <TextInput
        placeholder="Can be picked up?"
        style={styles.textInput1}
      ></TextInput>
      <TextInput
        placeholder="Name of product"
        style={styles.textInput2}
      ></TextInput>
      <Text style={styles.or2}>OR</Text>
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
    width: 249,
    height: 63,
    marginTop: 258,
    alignSelf: "center"
  },
  otherShit: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -253,
    marginLeft: 50
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 249,
    height: 63,
    marginTop: 290,
    alignSelf: "center"
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 258,
    height: 37,
    marginTop: -332,
    marginLeft: 59
  },
  or2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 201,
    marginLeft: 71
  }
});

export default AddProduct;
