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

class Influencerreg extends React.Component {
    
    render() {
        const { navigation } = this.props;

        return (
            <Block flex middle>
                <StatusBar hidden />
                <ImageBackground
                    source={Images.RegisterBackground}
                    style={{ width, height, zIndex: 1 }}
                >
              <Block flex>
                <Block flex={0.17} middle>
                  <Text bold color={Theme.COLORS.DEFUALT} style={{marginTop:20}} size={25}>
                    Sign up as an Influencer
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15, flexDirection: "row"}}>
                        <Input
                            borderless
                            placeholder="First Name"
                            iconContent={
                            <Icon
                                size={16}
                                color={Theme.COLORS.ICON}
                                name=""
                                family="ArgonExtra"
                                style={styles.inputIcons}
                            />
                            }
                            style={{ width: width * 0.33 }}

                        />
                        <Text>
                            {"     "}
                        </Text>
                        <Input
                            borderless
                            placeholder="Last Name"
                            iconContent={
                                <Icon
                                    size={16}
                                    color={Theme.COLORS.ICON}
                                    name=""
                                    family="ArgonExtra"
                                    style={styles.inputIcons}
                                />
                            }
                            style={{width:width*0.43}}
                        />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="City"
                        iconContent={
                          <Icon
                            size={16}
                            color={Theme.COLORS.ICON}
                            name="ios-map"
                            family="Ionicon"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={Theme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                        type="email"
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Phone Number"
                        iconContent={
                          <Icon
                            size={16}
                            color={Theme.COLORS.ICON}
                            name="ios-cellular"
                            family="Ionicon"
                            style={styles.inputIcons}
                          />
                        }
                        type="number-pad"
                      />
                    </Block>

                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        iconContent={
                          <Icon
                            size={16}
                            color={Theme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={Theme.COLORS.PRIMARY}
                        label="I agree with the"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color: Theme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </Button>
                    </Block>
                    <Block middle>
                      <Button color="primary" style={styles.createButton} 
                        onPress={ () => navigation.navigate("SocialMedia")}
                      >
                        <Text bold size={14} color={Theme.COLORS.WHITE}>
                          CONTINUE
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
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

export default Influencerreg;
