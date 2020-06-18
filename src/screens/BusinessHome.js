import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Slider,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Menu from "../components/Menu";

function BusinessHome(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect8}>
        <View style={styles.ellipse1Row}>
          <Svg viewBox="0 0 61.2 58.28" style={styles.ellipse1}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(126,211,33,1)"
              cx={31}
              cy={29}
              rx={31}
              ry={29}
            ></Ellipse>
          </Svg>
          <View style={styles.joeReed1Column}>
            <Text style={styles.joeReed1}>Joe Reed</Text>
            <Text style={styles.topInfluencer1}>TOP INFLUENCER!</Text>
            <Text style={styles.loremIpsum3}>100 sales in last 24 hours</Text>
          </View>
        </View>
      </View>
      <Slider value={50} style={styles.slider}></Slider>
      <Text style={styles.influencersNearYou}>Influencers near you</Text>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.button3StackRow}>
            <View style={styles.button3Stack}>
              <TouchableOpacity style={styles.button3}></TouchableOpacity>
              <TouchableOpacity style={styles.button2}></TouchableOpacity>
              <View style={styles.rect}></View>
              <View style={styles.rect2}></View>
              <View style={styles.rect3}></View>
              <View style={styles.rect4}></View>
            </View>
            <View style={styles.buttonStack}>
              <TouchableOpacity style={styles.button}></TouchableOpacity>
              <View style={styles.rect5}></View>
              <View style={styles.rect6}></View>
              <View style={styles.rect7}></View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Text style={styles.loremIpsum}>
        How many sales/clicks/influence do you want?
      </Text>
      <View style={styles.loremIpsum2Row}>
        <Text style={styles.loremIpsum2}>List of all my products</Text>
        <Menu style={styles.menu}></Menu>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect8: {
    width: 289,
    height: 103,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 42,
    marginTop: 109,
    marginLeft: 37
  },
  ellipse1: {
    width: 61,
    height: 58,
    marginTop: 7
  },
  joeReed1: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  topInfluencer1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 17,
    marginTop: 14
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 9
  },
  joeReed1Column: {
    width: 158,
    marginLeft: 24
  },
  ellipse1Row: {
    height: 75,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 9,
    marginRight: 37
  },
  slider: {
    height: 32,
    width: 300,
    marginTop: 433,
    marginLeft: 37
  },
  influencersNearYou: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -609,
    marginLeft: 37
  },
  scrollArea: {
    width: 300,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    transform: [
      {
        rotate: "-0.32deg"
      }
    ],
    marginTop: 363,
    marginLeft: 38
  },
  scrollArea_contentContainerStyle: {
    width: 450,
    height: 150,
    flexDirection: "row"
  },
  button3: {
    left: 15,
    width: 115,
    height: 120,
    position: "absolute",
    backgroundColor: "rgba(206,45,45,1)",
    top: 17
  },
  button2: {
    width: 129,
    height: 117,
    position: "absolute",
    backgroundColor: "rgba(206,45,45,1)",
    left: 85,
    top: 17
  },
  rect: {
    flex: 0.14,
    backgroundColor: "rgba(225, 225, 225,1)",
    position: "absolute",
    top: 0,
    left: 0,
    height: 150,
    width: 63
  },
  rect2: {
    flex: 0.14,
    backgroundColor: "rgba(237, 237, 237,1)",
    position: "absolute",
    top: 0,
    left: 63,
    height: 150,
    width: 63
  },
  rect3: {
    flex: 0.14,
    backgroundColor: "rgba(248, 248, 248,1)",
    position: "absolute",
    top: 0,
    left: 126,
    height: 150,
    width: 63
  },
  rect4: {
    flex: 0.14,
    backgroundColor: "rgba(208, 208, 208,1)",
    position: "absolute",
    top: 0,
    left: 189,
    height: 150,
    width: 63
  },
  button3Stack: {
    width: 252,
    height: 150
  },
  button: {
    left: 56,
    width: 129,
    height: 117,
    position: "absolute",
    backgroundColor: "rgba(206,45,45,1)",
    top: 17
  },
  rect5: {
    flex: 0.14,
    backgroundColor: "rgba(232, 232, 232,1)",
    position: "absolute",
    top: 0,
    left: 0,
    height: 150,
    width: 63
  },
  rect6: {
    flex: 0.14,
    backgroundColor: "rgba(218, 218, 218,1)",
    position: "absolute",
    top: 0,
    left: 63,
    height: 150,
    width: 63
  },
  rect7: {
    flex: 0.16,
    backgroundColor: "rgba(216, 216, 216,1)",
    position: "absolute",
    top: 0,
    left: 126,
    height: 150,
    width: 72
  },
  buttonStack: {
    width: 198,
    height: 150
  },
  button3StackRow: {
    height: 150,
    flexDirection: "row",
    flex: 1,
    marginRight: -150
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 32,
    marginLeft: 46
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 27
  },
  menu: {
    height: 44,
    width: 40,
    marginLeft: 110
  },
  loremIpsum2Row: {
    height: 44,
    flexDirection: "row",
    marginTop: -261,
    marginLeft: 39,
    marginRight: 48
  }
});

export default BusinessHome;
