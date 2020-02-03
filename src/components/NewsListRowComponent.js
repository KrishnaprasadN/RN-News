import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class NewsListRowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "News Detail Screen",
        };
    }

    render() {
        return (
            <Text style={styles.titleText}>
                {this.props.title}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        height: 60
    },
});
