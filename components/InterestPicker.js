import React from 'react';
import { StyleSheet, Dimensions, View, FlatList, TouchableOpacity } from 'react-native';
import { Block, Button, Text } from 'galio-framework';
import Theme from '../constants/Theme'
class InterestPicker extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const interests = [
            { name: "Clothing"},
            { name: "Hardware"},
            { name: "Toys"}, 
            { name: "Books"}
        ];

        return (
            <Block flex center middle>

                <View style={[styles.interestsContainer]}>
                    <Text bold size={20} color={Theme.COLORS.DEFAULT} style={styles.textQuestion}>
                        {this.props.text}
                    </Text>
                    <FlatList
                        data={interests}
                        numColumns={2}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => console.log(item, this.props.text)}
                                style={[
                                    styles.interestContainer
                                ]}>
                                <Text style={styles.interestText}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => {
                            index.toString();
                        }}
                        scrollEnabled={false}
                    />
                </View>
                <Block middle>
                    <Button color="primary" style={styles.createButton}>
                        <Text bold size={14} color={Theme.COLORS.WHITE}>
                            CONTINUE
                        </Text>
                    </Button>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    interestText: {
        fontSize: 20,
        color: "#242C40",
    },
    createButton: {
        width: 300,
        marginTop: 25,

    },
    textQuestion: {
        textAlign: "center",
        margin: 20,
    },
    interestContainer: {
        height: 170,
        width: 170,
        borderRadius: 20,
        marginLeft: 16,
        margin: 12,
        borderColor: "black",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
    },
    interestsContainer: {
        marginTop: 700,
        height: 500,
        width: 400,
    },
});

export default InterestPicker;
