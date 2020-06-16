import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Stats(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.activePromotions}>Active Promotions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 326,
    height: 54,
    backgroundColor: "#E6E6E6",
    marginTop: 62,
    alignSelf: "center"
  },
  activePromotions: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 20,
    marginLeft: 106
  }
});

export default Stats;
