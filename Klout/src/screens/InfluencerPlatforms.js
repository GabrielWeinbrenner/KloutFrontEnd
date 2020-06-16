import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function InfluencerPlatforms(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeName}>
        Welcome &lt;Name&gt;! Check which social medias {"\n"}you are on!
      </Text>
      <View style={styles.rect}>
        <Text style={styles.tikTok}>TikTok</Text>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.instagram}>Instagram</Text>
      </View>
      <View style={styles.rect3}>
        <Text style={styles.facebook}>Facebook</Text>
      </View>
      <View style={styles.facebook1Stack}>
        <Text style={styles.facebook1}>Facebook</Text>
        <View style={styles.rect4}>
          <Text style={styles.youtube}>Youtube</Text>
        </View>
      </View>
      <View style={styles.facebook2Stack}>
        <Text style={styles.facebook2}>Facebook</Text>
        <View style={styles.rect5}>
          <Text style={styles.facebook4}></Text>
          <Text style={styles.medium}>Medium</Text>
        </View>
      </View>
      <View style={styles.medium1Stack}>
        <Text style={styles.medium1}>Medium</Text>
        <View style={styles.rect6}>
          <Text style={styles.reddit}>Reddit</Text>
        </View>
      </View>
      <View style={styles.medium2Stack}>
        <Text style={styles.medium2}>Medium</Text>
        <View style={styles.rect7}>
          <Text style={styles.otherEtc}>Other, etc.</Text>
        </View>
      </View>
      <View style={styles.rect8}>
        <Text style={styles.next}>Next</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcomeName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 95,
    marginLeft: 39
  },
  rect: {
    width: 230,
    height: 46,
    backgroundColor: "#E6E6E6",
    marginTop: 30,
    marginLeft: 39
  },
  tikTok: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 13,
    marginLeft: 39
  },
  rect2: {
    width: 230,
    height: 45,
    backgroundColor: "#E6E6E6",
    marginTop: 31,
    marginLeft: 39
  },
  instagram: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 13,
    marginLeft: 39
  },
  rect3: {
    width: 230,
    height: 45,
    backgroundColor: "#E6E6E6",
    marginTop: 31,
    marginLeft: 39
  },
  facebook: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 13,
    marginLeft: 38
  },
  facebook1: {
    top: 13,
    left: 38,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect4: {
    top: 0,
    left: 0,
    width: 230,
    height: 45,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  youtube: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 13,
    marginLeft: 41
  },
  facebook1Stack: {
    width: 230,
    height: 45,
    marginTop: 29,
    marginLeft: 39
  },
  facebook2: {
    top: 13,
    left: 38,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect5: {
    top: 0,
    left: 0,
    width: 230,
    height: 45,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  facebook4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 13,
    marginLeft: 41
  },
  medium: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 1,
    marginLeft: 42
  },
  facebook2Stack: {
    width: 230,
    height: 45,
    marginTop: 26,
    marginLeft: 39
  },
  medium1: {
    top: 14,
    left: 42,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect6: {
    top: 0,
    left: 0,
    width: 230,
    height: 45,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  reddit: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 13,
    marginLeft: 38
  },
  medium1Stack: {
    width: 230,
    height: 45,
    marginTop: 33,
    marginLeft: 39
  },
  medium2: {
    top: 13,
    left: 42,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect7: {
    top: 0,
    left: 0,
    width: 230,
    height: 45,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  otherEtc: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 13,
    marginLeft: 38
  },
  medium2Stack: {
    width: 230,
    height: 45,
    marginTop: 22,
    marginLeft: 39
  },
  rect8: {
    width: 293,
    height: 42,
    backgroundColor: "#E6E6E6",
    marginTop: 40,
    marginLeft: 39
  },
  next: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 12,
    marginLeft: 132
  }
});

export default InfluencerPlatforms;
