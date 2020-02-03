import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardView from 'react-native-cardview';
import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class NewsListRowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "News Detail Screen",
        };
    }

    componentDidMount() {
        console.log("***** Home Component ****** " + JSON.stringify(this.props));
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <CardView
                    cardElevation={5}
                    cardMaxElevation={5}
                    cornerRadius={5}
                    style={styles.cardViewStyle}>

                    <Text style={styles.newsTitle}> {this.props.title} </Text>
                    <Text style={styles.newsDate}> {this.props.newsItem.published} </Text>

                </CardView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    cardViewStyle: {
        alignSelf: 'stretch',
        height: 130,
        alignContent: 'space-around'
    },
    newsTitle: {
        fontSize: 18,
        color: '#000',
        textAlign: 'left',
        margin:5
    },
    newsDate: {
        fontSize: 18,
        color: '#000',
        textAlign: 'left',
        margin:5
    },
});
