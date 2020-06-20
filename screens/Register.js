import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import Button from '../components/Button';
import Icon from '../components/Icon';
import Input from '../components/Input';

import Images from "../constants/Images";
import Theme from '../constants/Theme';

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block style={styles.heading}>
            <Text size={20} color={Theme.COLORS.DEFAULT} style={styles.center}>
              Either create an influencer account or business account with clout
            </Text>
          </Block>
          <Block middle>
            <Button color="primary" style={styles.createButton, styles.heading}
              onPress={() => navigation.navigate("InfluencerRegistration")}
            >
              <Text bold size={14} color={Theme.COLORS.WHITE} style={styles.center}>
                CREATE INFLUENCER ACCOUNT
              </Text>
            </Button>
          </Block>
          <Block middle>
              <Text bold size={14} color={Theme.COLORS.DEFAULT} style={styles.heading}>
                OR
              </Text>
          </Block>
          <Block middle>
            <Button color="primary" style={styles.createButton, styles.heading}
              onPress={() => {
                navigation.navigate("BusinessRegistration")
                console.log("Business Account Pressed")
              }
              }
            >
              <Text bold size={14} color={Theme.COLORS.WHITE} style={styles.center}>
                CREATE BUSINESS ACCOUNT
              </Text>
            </Button>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: Theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: Theme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: Theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: Theme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  heading: {
    marginTop: 100,
    margin: 30,
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,

  },
  center: {
    textAlign: "center"
  }
});

export default Register;
