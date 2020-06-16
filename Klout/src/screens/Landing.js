import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

function Landing(props) {
  return (
    <View style={styles.container}>
      <View style={styles.signInRow}>
        <TouchableOpacity style={styles.signIn}>
          <Text style={styles.signIn2}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("InfluencerReg")}
          style={styles.register}
        >
          <Text style={styles.register2}>Register</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/images/klout.jpeg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.influencer}>INFLUENCER</Text>
      <Text style={styles.smallBusiness}>
        SMALL BUSINESS (&lt;500 employees)
      </Text>
      <View style={styles.signIn3StackRow}>
        <View style={styles.signIn3Stack}>
          <Text style={styles.signIn3}>Sign In</Text>
          <TouchableOpacity style={styles.signIn4}>
            <Text style={styles.signIn5}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.register3Stack}>
          <Text style={styles.register3}>Register</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("BusinesssReg")}
            style={styles.register4}
          >
            <Text style={styles.register5}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.loremIpsum}>
        Promotion based sales platform for small{"\n"}businesses
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  signIn: {
    width: 145,
    height: 52,
    backgroundColor: "#E6E6E6"
  },
  signIn2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 18,
    marginLeft: 51
  },
  register: {
    width: 145,
    height: 52,
    backgroundColor: "#E6E6E6",
    marginLeft: 31
  },
  register2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 18,
    marginLeft: 47
  },
  signInRow: {
    height: 52,
    flexDirection: "row",
    marginTop: 618,
    marginLeft: 28,
    marginRight: 26
  },
  image: {
    width: 290,
    height: 103,
    marginTop: -575,
    marginLeft: 59
  },
  influencer: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 378,
    marginLeft: 28
  },
  smallBusiness: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -220,
    marginLeft: 28
  },
  signIn3: {
    top: 16,
    left: 49,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  signIn4: {
    top: 0,
    left: 0,
    width: 145,
    height: 52,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  signIn5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 16,
    marginLeft: 51
  },
  signIn3Stack: {
    width: 145,
    height: 52
  },
  register3: {
    top: 15,
    left: 46,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  register4: {
    top: 0,
    left: 0,
    width: 145,
    height: 52,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  register5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 15,
    marginLeft: 46
  },
  register3Stack: {
    width: 145,
    height: 52,
    marginLeft: 30,
    marginTop: 1
  },
  signIn3StackRow: {
    height: 53,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 29,
    marginRight: 26
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -234,
    marginLeft: 63
  }
});

export default Landing;
