import React from "react";
import {
    StyleSheet,
    Dimensions,
    View,
} from "react-native";

import InterestsPicker from '../components/InterestPicker';

const { width, height } = Dimensions.get("screen");

class Interests extends React.Component {
    render() {
        return(
            <View>
                <InterestsPicker text="What are your interests?"/>
            </View>
        )
        
    }
}

const styles = StyleSheet.create({

});

export default Interests;
