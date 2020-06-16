import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function GotTheCashapp(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>Link your cashapp here:</Text>
      <TextInput
        placeholder="Cashapp username"
        style={styles.textInput}
      ></TextInput>
      <Text style={styles.loremIpsum2}>Add profile picture here:</Text>
      <View style={styles.ellipseRow}>
        <Svg viewBox="0 0 89.75 88.21" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={45}
            cy={44}
            rx={45}
            ry={44}
          ></Ellipse>
        </Svg>
        <View style={styles.rect}>
          <Text style={styles.upload}>Upload</Text>
        </View>
      </View>
      <Text style={styles.loremIpsum3}>Short Description here:</Text>
      <TextInput
        placeholder="Lorem Ipsum"
        style={styles.textInput2}
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
    marginTop: 151,
    marginLeft: 42
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 207,
    height: 38,
    marginTop: 32,
    marginLeft: 60
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 114,
    marginLeft: 60
  },
  ellipse: {
    width: 108,
    height: 119
  },
  rect: {
    width: 164,
    height: 44,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 17,
    marginLeft: 30,
    marginTop: 45
  },
  upload: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 14,
    marginLeft: 58
  },
  ellipseRow: {
    height: 119,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 26,
    marginRight: 47
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 49,
    marginLeft: 55
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 82,
    height: 16,
    marginTop: 44,
    marginLeft: 55
  }
});

export default GotTheCashapp;
