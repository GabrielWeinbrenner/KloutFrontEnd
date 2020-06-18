import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function BusinessProducts(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>
        What kind of business is &lt;business name&gt;?
      </Text>
      <TextInput
        placeholder="Food, Retail, Digital, or Services"
        style={styles.textInput}
      ></TextInput>
      <Text style={styles.loremIpsum2}>
        How many products/services do you want to promote?
      </Text>
      <TextInput placeholder="Eg. 50" style={styles.textInput2}></TextInput>
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
    marginTop: 82,
    marginLeft: 47
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 32,
    width: 245,
    marginTop: 19,
    marginLeft: 61
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 63,
    marginLeft: 13
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 94,
    height: 18,
    marginTop: 25,
    marginLeft: 61
  },
  rect: {
    width: 271,
    height: 62,
    backgroundColor: "#E6E6E6",
    borderRadius: 32,
    marginTop: 397,
    marginLeft: 47
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 25,
    marginLeft: 104
  }
});

export default BusinessProducts;
