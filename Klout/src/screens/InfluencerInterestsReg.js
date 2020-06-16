import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function InfluencerInterestsReg(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>
        Please list types of small businesses{"\n"} you are interested in
        promoting:
      </Text>
      <View style={styles.rectRow}>
        <View style={styles.rect}>
          <Text style={styles.foodAndBeverage}>Food and{"\n"} Beverage</Text>
        </View>
        <View style={styles.rect4}>
          <Text style={styles.retailItems}>
            Retail Items{"\n"}/Physical Goods
          </Text>
        </View>
      </View>
      <View style={styles.rect3Row}>
        <View style={styles.rect3}>
          <Text style={styles.digitalGoods}>Digital Goods</Text>
        </View>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}></View>
          <Text style={styles.services}>Services</Text>
        </View>
      </View>
      <View style={styles.rect5}>
        <Text style={styles.next}>Next</Text>
      </View>
      <Text style={styles.loremIpsum2}>
        Might want to focus on a specific demographic
      </Text>
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
    marginTop: 99,
    alignSelf: "center"
  },
  rect: {
    width: 162,
    height: 159,
    backgroundColor: "#E6E6E6",
    borderRadius: 38,
    borderWidth: 2,
    borderColor: "#000000"
  },
  foodAndBeverage: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 63,
    marginLeft: 50
  },
  rect4: {
    width: 141,
    height: 159,
    backgroundColor: "#E6E6E6",
    borderRadius: 38,
    borderWidth: 2,
    borderColor: "#000000",
    marginLeft: 25
  },
  retailItems: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 63,
    marginLeft: 20
  },
  rectRow: {
    height: 159,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 26,
    marginRight: 21
  },
  rect3: {
    width: 139,
    height: 168,
    backgroundColor: "#E6E6E6",
    borderRadius: 38,
    borderWidth: 2,
    borderColor: "#000000",
    borderStyle: "solid"
  },
  digitalGoods: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 84,
    marginLeft: 27
  },
  rect2: {
    top: 0,
    left: 0,
    width: 167,
    height: 168,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 38
  },
  services: {
    left: 61,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    top: 76,
    bottom: 76,
    right: 0
  },
  rect2Stack: {
    flex: 1,
    marginLeft: 23
  },
  rect3Row: {
    height: 168,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 26,
    marginRight: -249
  },
  rect5: {
    width: 282,
    height: 45,
    backgroundColor: "#E6E6E6",
    marginTop: 167,
    marginLeft: 46
  },
  next: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 21,
    marginLeft: 120
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -184,
    marginLeft: 64
  }
});

export default InfluencerInterestsReg;
