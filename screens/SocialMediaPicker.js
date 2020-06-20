import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Radio, Button, Text } from 'galio-framework';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <Block flex middle>
                <Block>
                    <Text h4 bold style={styles.heading}>
                        Which Social Medias Do You Use?
                    </Text>
                </Block>
                <Block center middle>
                    <Radio containerStyle={styles.radioDist} label="Tik Tok" />
                    <Radio containerStyle={styles.radioDist} label="Instagram" />
                    <Radio containerStyle={styles.radioDist} label="Twitter" />
                    <Radio containerStyle={styles.radioDist} label="YouTube" />
                    <Radio containerStyle={styles.radioDist} label="Facebook" />
                </Block>
                <Block>
                    <Button 
                        style={styles.continueButton} round size="small" color="primary"
                        onPress={()=>{navigation.navigate("Interests")}}
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

export default Home;
