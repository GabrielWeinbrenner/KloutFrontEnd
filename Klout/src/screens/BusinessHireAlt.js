import React, { Component } from "react";
import { StyleSheet, View, Slider, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Menu from "../components/Menu";

function BusinessHireAlt(props) {
  return (
    <View style={styles.container}>
      <Slider value={74} style={styles.slider}></Slider>
      <Text style={styles.influencersNearYou}>Influencers near you</Text>
      <View style={styles.scrollAreaRow}>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.rect9}></View>
          </ScrollView>
        </View>
        <View style={styles.rect10}></View>
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
      <View style={styles.rect11}>
        <Text style={styles.joeReed1}>Joe Reed</Text>
        <Text style={styles.topInfluencer1}>TOP INFLUENCER!</Text>
        <Text style={styles.loremIpsum3}>100 sales in last 24 hours</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slider: {
    height: 32,
    width: 300,
    marginTop: 632,
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
    ]
  },
  scrollArea_contentContainerStyle: {
    width: 150,
    height: 150
  },
  rect9: {
    width: 138,
    height: 122,
    backgroundColor: "rgba(48,58,128,1)",
    borderRadius: 22,
    marginTop: 14,
    marginLeft: 12
  },
  rect10: {
    width: 138,
    height: 122,
    backgroundColor: "rgba(48,58,128,1)",
    borderRadius: 22,
    marginLeft: 7,
    marginTop: 14
  },
  scrollAreaRow: {
    height: 150,
    flexDirection: "row",
    marginTop: 356,
    marginLeft: 37,
    marginRight: 43
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
  },
  rect11: {
    width: 289,
    height: 103,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 42,
    marginTop: -637,
    marginLeft: 37
  },
  joeReed1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 12,
    marginLeft: 94
  },
  topInfluencer1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 17,
    marginTop: 14,
    marginLeft: 94
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 9,
    marginLeft: 94
  }
});

export default BusinessHireAlt;
