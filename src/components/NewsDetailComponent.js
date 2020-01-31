import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SpaceComponent from './SpaceComponent';

export default class NewsDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "News Detail Screen",
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SpaceComponent />
                <Text style={styles.titleText}>
                    {this.state.title}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        height: 50,
        alignContent: 'center',
    },
});
