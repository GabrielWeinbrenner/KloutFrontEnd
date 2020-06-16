import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function InfluencerExplanation(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.link2}>Link</Text>
      <Text style={styles.promote}>Promote</Text>
      <View style={styles.getPaidRow}>
        <Text style={styles.getPaid}>Get Paid</Text>
        <Icon name="money" style={styles.icon}></Icon>
      </View>
      <Text style={styles.loremIpsum}>
        Choose which products and businesses{"\n"}you want to promote. Use your
        special{"\n"}link on your social media using your own{"\n"}creative
        methods, and for every purchase{"\n"}made using your link, you will earn
        {"\n"}a comission!
      </Text>
      <Text style={styles.loremIpsum2}>
        Link your cashapp to cash out each{"\n"}month, week, or however long you
        want.{"\n"}
        {"\n"}Reach influencer milestones to increase{"\n"}your KLOUT score.{" "}
        {"\n"}
        {"\n"}The higher your KLOUT score, the more {"\n"}lucrative the
        opportunities that would {"\n"} be available to you.
      </Text>
      <Text style={styles.loremIpsum3}>
        Fill out your profile to get started!{"\n"}Indicate what kinds of small
        businesses{"\n"}you are interested in promoting
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  link2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 96,
    marginLeft: 62
  },
  promote: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 131,
    marginLeft: 62
  },
  getPaid: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 20
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 8
  },
  getPaidRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 172,
    marginLeft: 55,
    marginRight: 216
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -190,
    marginLeft: 62
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 108,
    marginLeft: 62
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -493,
    marginLeft: 75
  }
});

export default InfluencerExplanation;
