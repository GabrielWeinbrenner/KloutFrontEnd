import React from 'react';
import { StyleSheet, Dimensions, View, FlatList, TouchableHighlight  } from 'react-native';
import { Block, Button, Text } from 'galio-framework';
import Theme from '../constants/Theme'
class InterestPicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            interests: [
                { name: "Clothing", backgroundColor: '#5E72E4' },
                { name: "Hardware", backgroundColor: '#5E72E4' },
                { name: "Toys", backgroundColor: '#5E72E4' },
                { name: "Books", backgroundColor: '#5E72E4' }
            ]
        }
    }
    render() {
        const navigation = this.props.navigation
    

        return (
            <Block flex center middle>

                <View style={[styles.interestsContainer]}>
                    <Text bold size={20} color={Theme.COLORS.DEFAULT} style={styles.textQuestion}>
                        {this.props.text}
                    </Text>
                    <FlatList
                        data={this.state.interests}
                        numColumns={2}
                        renderItem={({ item, index }) => (
                            <Button 
                                onPress={() => {
                                    var i = this.state.interests;
                                    var color = i[index].backgroundColor;
                                    if (color == '#5E72E4' )
                                        i[index].backgroundColor = "#3b53de";
                                    else
                                        i[index].backgroundColor = '#5E72E4';
                                    this.setState({interests: i})
                                }}
                                style={[
                                    styles.interestContainer
                                ]}
                                color={this.state.interests[index].backgroundColor}
                                >   
                                <Text style={styles.interestText}>{item.name}</Text>
                            </Button >
                        )}
                        keyExtractor={(item, index) => {
                            index.toString();
                        }}
                        scrollEnabled={false}
                    />
                </View>
                <Block middle>
                    <Button color="primary" style={styles.createButton}
                        onPress={()=>{
                            const influencer = this.props.input.influencer;
                            const vals = this.state.interests.filter((item) => {
                                if (item.backgroundColor == "#3b53de"){
                                    return item.name;
                                }
                            })
                            influencer.interests = vals;
                            navigation.navigate(this.props.destination, {influencer})
                        }}
                    >
                        <Text bold size={14} color={Theme.COLORS.WHITE} >
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
        color: '#FFFFFF',
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
