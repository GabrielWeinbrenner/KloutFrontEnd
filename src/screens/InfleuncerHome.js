import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function InfleuncerHome(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.findNewPromotions}>Find New Promotions!</Text>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.activePromotions}>Active Promotions</Text>
      </View>
      <View style={styles.rect3StackRow}>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}>
            <Text style={styles.kiwiMegaDrink}>Kiwi Mega Drink</Text>
            <Text style={styles.copyLink}>Copy Link</Text>
            <Text style={styles.loremIpsum}>50 Purchases</Text>
          </View>
          <Icon name="copy" style={styles.icon}></Icon>
        </View>
        <View style={styles.rect4}>
          <Text style={styles.loremIpsum3}>Lorem Ipsum</Text>
          <Text style={styles.loremIpsum4}>20 purhcase</Text>
        </View>
      </View>
      <View style={styles.rect5Row}>
        <View style={styles.rect5}></View>
        <View style={styles.rect6}></View>
      </View>
      <Text style={styles.sortBy}>Sort By:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 274,
    height: 57,
    backgroundColor: "#E6E6E6",
    marginTop: 713,
    marginLeft: 56
  },
  findNewPromotions: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 29,
    marginLeft: 68
  },
  rect2: {
    width: 298,
    height: 57,
    backgroundColor: "#E6E6E6",
    marginTop: -689,
    marginLeft: 32
  },
  activePromotions: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 22,
    marginLeft: 100
  },
  rect3: {
    top: 0,
    left: 0,
    width: 128,
    height: 125,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#000000"
  },
  kiwiMegaDrink: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 19,
    marginLeft: 17
  },
  copyLink: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 28,
    marginLeft: 10
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 2,
    marginLeft: 24
  },
  icon: {
    top: 42,
    left: 92,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  rect3Stack: {
    width: 132,
    height: 125
  },
  rect4: {
    width: 128,
    height: 125,
    backgroundColor: "#E6E6E6",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#000000",
    marginLeft: 29
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 23,
    marginLeft: 21
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 50,
    marginLeft: 22
  },
  rect3StackRow: {
    height: 125,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 32,
    marginRight: 54
  },
  rect5: {
    width: 128,
    height: 125,
    backgroundColor: "#E6E6E6",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#000000"
  },
  rect6: {
    width: 128,
    height: 125,
    backgroundColor: "#E6E6E6",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#000000",
    marginLeft: 33
  },
  rect5Row: {
    height: 125,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 32,
    marginRight: 54
  },
  sortBy: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -313,
    marginLeft: 56
  }
});

export default InfleuncerHome;
