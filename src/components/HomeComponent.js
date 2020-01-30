import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Home Screen",
        };
    }

    render() {
        return (
            <Text>
                {this.state.title}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
