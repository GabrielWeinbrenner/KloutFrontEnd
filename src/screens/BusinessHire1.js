import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Slider,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import MapView from "react-native-maps";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/Entypo";
import Menu from "../components/Menu";

function BusinessHire1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.mapViewStack}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          customMapStyle={[]}
          style={styles.mapView}
        ></MapView>
        <Svg viewBox="0 0 100.58 99.02" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(219,19,19,0.92)"
            strokeWidth={62}
            cx={50}
            cy={50}
            rx={19}
            ry={19}
          ></Ellipse>
        </Svg>
      </View>
      <Slider value={74} style={styles.slider}></Slider>
      <Text style={styles.influencersNearYou}>Influencers near you</Text>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.button3StackStack}>
            <View style={styles.button3Stack}>
              <TouchableOpacity style={styles.button3}></TouchableOpacity>
              <TouchableOpacity style={styles.button2}></TouchableOpacity>
              <View style={styles.rect}></View>
              <View style={styles.rect2}></View>
              <View style={styles.rect3}></View>
              <View style={styles.rect4}></View>
              <View style={styles.rect9}></View>
              <View style={styles.rect10}></View>
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
      <Text style={styles.loremIpsum}>How many clout do you want?</Text>
      <View style={styles.loremIpsum2Row}>
        <Text style={styles.loremIpsum2}>List of all my products</Text>
        <Icon name="circle-with-minus" style={styles.icon}></Icon>
        <Menu style={styles.menu}></Menu>
      </View>
      <View style={styles.rect8}>
        <Text style={styles.go}>Go</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapView: {
    position: "absolute",
    top: 0,
    height: 259,
    width: 321,
    left: 0
  },
  ellipse: {
    top: 54,
    left: 110,
    width: 101,
    height: 99,
    position: "absolute",
    opacity: 0.23
  },
  mapViewStack: {
    width: 321,
    height: 259,
    marginTop: 91,
    marginLeft: 27
  },
  slider: {
    height: 32,
    width: 300,
    marginTop: 282,
    marginLeft: 37
  },
  influencersNearYou: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -596,
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
    marginTop: 356,
    marginLeft: 37
  },
  scrollArea_contentContainerStyle: {
    width: 450,
    height: 150
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
  rect9: {
    top: 14,
    left: 12,
    width: 138,
    height: 122,
    position: "absolute",
    backgroundColor: "rgba(48,58,128,1)",
    borderRadius: 22
  },
  rect10: {
    top: 14,
    left: 157,
    width: 138,
    height: 122,
    position: "absolute",
    backgroundColor: "rgba(48,58,128,1)",
    borderRadius: 22
  },
  button3Stack: {
    top: 0,
    left: 0,
    width: 295,
    height: 150,
    position: "absolute"
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
    top: 0,
    left: 252,
    width: 198,
    height: 150,
    position: "absolute"
  },
  button3StackStack: {
    width: 450,
    height: 150
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 26,
    marginLeft: 42
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 23
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 81
  },
  menu: {
    height: 44,
    width: 40,
    marginLeft: 1
  },
  loremIpsum2Row: {
    height: 46,
    flexDirection: "row",
    marginTop: -244,
    marginLeft: 39,
    marginRight: 36
  },
  rect8: {
    width: 276,
    height: 47,
    backgroundColor: "#E6E6E6",
    marginTop: 265,
    marginLeft: 49
  },
  go: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 17,
    marginLeft: 122
  }
});

export default BusinessHire1;
