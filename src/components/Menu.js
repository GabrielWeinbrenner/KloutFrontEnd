import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Menu(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="plus-circle" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  }
});

export default Menu;
