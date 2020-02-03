import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CardView from 'react-native-cardview';
const CONSTANTS = require('../utils/Constants');

export default class NewsDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "News Detail Screen",
        };
    }

    render() {
        const { navigation } = this.props;
        var newsItem = navigation.getParam('item', {})

        return (
            <View style={styles.mainContainer}>
                <Image
                    source={{ uri: CONSTANTS.IMAGE_URL }}
                    style={styles.image}
                />
                <CardView
                    cardElevation={5}
                    cardMaxElevation={5}
                    cornerRadius={5}
                    style={styles.cardViewStyle}>

                    <Text style={styles.newsTitle}>
                        {newsItem.title}
                    </Text>

                    <Text style={styles.newsDes} numberOfLines={6}>
                        {newsItem.description}
                    </Text>

                    <Text style={styles.newsDate}>
                        {newsItem.published}
                    </Text>

                </CardView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 5,
        height: 300,
    },
    cardViewStyle: {
        alignSelf: 'stretch',
        height: 250,
        justifyContent: 'space-evenly',
    },
    newsTitle: {
        fontSize: 18,
        color: '#000',
        textAlign: 'left',
        fontWeight: 'bold',
        margin: 5
    },
    newsDes: {
        fontSize: 18,
        color: '#000',
        textAlign: 'left',
        margin: 5
    },
    newsDate: {
        fontSize: 14,
        color: '#000',
        textAlign: 'left',
        margin: 5
    },
    image: {
        margin: 5,
        justifyContent: 'center',
        height: 200,
        alignSelf: 'stretch',
    },
});
