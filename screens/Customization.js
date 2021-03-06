import React from "react";
import {
    StyleSheet,
    Dimensions,
    View,
} from "react-native";

import { Block, Text, Input, Button} from "galio-framework";
import Icon from '../components/Icon';
import Theme from '../constants/Theme';

const { width, height } = Dimensions.get("screen");

class Customization extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cashApp: "",
            desc: "",
        }
    }
    render() {
        const { navigation } = this.props;
        const influencer = this.props.route.params;

        return (

            <Block flex middle>
                <Block>
                    <Text h4 bold style={styles.heading}>
                        Customize your account
                    </Text>
                </Block>
                <Block width={width*0.8}>
                    <Text h5 bold style={styles.heading}>
                        Enter your CashApp
                    </Text>
                    <Input
                        borderless
                        value = {this.state.cashApp}
                        placeholder="CashApp Username"
                        iconContent={
                            <Icon
                                size={16}
                                color={Theme.COLORS.ICON}
                                name="md-cash"
                                family="Ionicon"
                                style={styles.inputIcons}
                            />
                        }
                        onChangeText={(cashApp) => {
                            this.setState({ cashApp })
                        }}
                    />
                </Block>
                <Block width={width * 0.8}>
                    <Text h5 bold style={styles.heading}>
                        Enter your Description
                    </Text>
                    <Input
                        borderless
                        placeholder="Description"
                        value={this.state.desc}

                        iconContent={
                            <Icon
                                size={16}
                                color={Theme.COLORS.ICON}
                                name="md-browsers"
                                family="Ionicon"
                                style={styles.inputIcons}
                            />
                        }
                        style={{padding: 0, height: 100, width: width*0.8}}
                        onChangeText={(desc) => {
                            this.setState({ desc })
                        }}
                    />
                </Block>
                <Block>
                    <Button
                        style={styles.continueButton} round size="small" color="primary"
                        onPress={() => { 
                            influencer.cashApp = this.state.cashApp;
                            influencer.description = this.state.desc;
                            console.log(influencer);
                            navigation.navigate("Profile") 
                        }}
                    >
                        Create Account
                    </Button>
                </Block>
            </Block>

        )

    }
}

const styles = StyleSheet.create({
    radioDist: {
        padding: 20,
    },
    heading: {
        textAlign: "center",
        padding: 20,
    },
    continueButton: {
        marginTop: 60,
    },
    inputIcons: {
        marginRight: 12
    },
});

export default Customization;
