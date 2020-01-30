import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class NewsDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "News Detail Screen",
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
