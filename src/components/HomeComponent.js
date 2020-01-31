import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Home Screen",
        };
    }

    render() {
        return (
            <View style={styles.container}>
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
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        height:500,
        alignContent: 'center',
    },
});
