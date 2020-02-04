import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, Alert, TouchableOpacity, Share } from 'react-native';
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
                <View style={styles.footerStyle}>
                    <TouchableOpacity onPress={() => this._onLiked()}>
                        <Image
                            source={require('../../images/like.png')}
                            style={styles.footerImg} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._onShareClick(newsItem.title)}>
                        <Image
                            source={require('../../images/share.png')}
                            style={styles.footerImg} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    // News Items row click listener, pass the News Item to the NewsDetailComponent
    _onLiked() {
        Alert.alert('You Liked it')
    }

    _onShareClick(title) {
        this.onShare(title)
    }

    onShare = async (title) => {
        try {
            const result = await Share.share({
                message:
                    title,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        margin: 5,
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
    footerStyle: {
        flexDirection: 'row',
        backgroundColor: '#DCDCDC',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
        bottom: 0,
        alignSelf: 'stretch',
        height: 60,
    },
    footerImg: {
        height: 30,
        width: 30,
    },
});
