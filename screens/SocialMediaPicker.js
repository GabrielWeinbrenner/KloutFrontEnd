import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Radio, Button, Text } from 'galio-framework';
const { width } = Dimensions.get('screen');

class SocialMediaPicker extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { navigation } = this.props;
        const influencer = this.props.route.params.influencer;
        return (
            <Block flex middle>
                <Block>
                    <Text h4 bold style={styles.heading}>
                        {console.log(influencer)}
                        Which Social Medias Do You Use?
                    </Text>
                </Block>
                <Block center middle>
                    <Radio containerStyle={styles.radioDist} 
                    onChange={(e) => {
                        if(e){influencer.socialMedia.push("TikTok")}
                        else { const i = influencer.socialMedia.indexOf("TikTok"); if(i !== -1) {influencer.socialMedia.splice(i,1)}}
                    }} label="Tik Tok" />
                    <Radio containerStyle={styles.radioDist} onChange={(e) => {
                        if (e) { influencer.socialMedia.push("Instagram") }
                        else { const i = influencer.socialMedia.indexOf("Instagram"); if (i !== -1) { influencer.socialMedia.splice(i, 1) } }
                    }} label="Instagram" />
                    <Radio containerStyle={styles.radioDist} onChange={(e) => {
                        if (e) { influencer.socialMedia.push("Twitter") }
                        else { const i = influencer.socialMedia.indexOf("Twitter"); if (i !== -1) { influencer.socialMedia.splice(i, 1) } }
                    }} label="Twitter" />
                    <Radio containerStyle={styles.radioDist} onChange={(e) => {
                        if (e) { influencer.socialMedia.push("YouTube") }
                        else { const i = influencer.socialMedia.indexOf("YouTube"); if (i !== -1) { influencer.socialMedia.splice(i, 1) } }
                    }} label="YouTube" />
                    <Radio containerStyle={styles.radioDist} onChange={(e) => {
                        if (e) { influencer.socialMedia.push("Facebook") }
                        else { const i = influencer.socialMedia.indexOf("Facebook"); if (i !== -1) { influencer.socialMedia.splice(i, 1) } }
                    }} label="Facebook" />
                </Block>
                <Block>
                    <Button 
                        style={styles.continueButton} round size="small" color="primary"
                        onPress={()=>{{
                            navigation.navigate("Interests", { influencer })
                        }}}
                    >
                    Go
                    </Button>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        width: width,
    },
    radioDist: {
        padding: 20,
    },
    heading: {
        textAlign: "center",
        padding: 20,
    },
    continueButton: {
        marginTop: 60,
    }
});

export default SocialMediaPicker;
