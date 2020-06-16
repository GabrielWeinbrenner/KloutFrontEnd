import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/Entypo";

function BusinessHome1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseRow}>
        <Svg viewBox="0 0 61.2 58.28" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={31}
            cy={29}
            rx={31}
            ry={29}
          ></Ellipse>
        </Svg>
        <View style={styles.myInfluencersColumn}>
          <Text style={styles.myInfluencers}>My Influencers</Text>
          <Text style={styles.joeReed}>Joe Reed</Text>
          <Text style={styles.topInfluencer}>TOP INFLUENCER!</Text>
        </View>
        <Icon name="twitter" style={styles.icon}></Icon>
      </View>
      <Text style={styles.loremIpsum}>100 sales in last 24 hours</Text>
      <View style={styles.loremIpsum2Row}>
        <Text style={styles.loremIpsum2}># of purchases thru link</Text>
        <Text style={styles.woodenBoat}>Wooden Boat</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ellipse: {
    width: 61,
    height: 58,
    marginTop: 31
  },
  myInfluencers: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  joeReed: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 15,
    marginLeft: 26
  },
  topInfluencer: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 17,
    marginTop: 14,
    marginLeft: 26
  },
  myInfluencersColumn: {
    width: 165,
    marginBottom: 8
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 19,
    marginTop: 8
  },
  ellipseRow: {
    height: 89,
    flexDirection: "row",
    marginTop: 90,
    marginLeft: 44,
    marginRight: 46
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 1,
    marginLeft: 131
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  woodenBoat: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 15
  },
  loremIpsum2Row: {
    height: 16,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 44,
    marginRight: 86
  }
});

export default BusinessHome1;
