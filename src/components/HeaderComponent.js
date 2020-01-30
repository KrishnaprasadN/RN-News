import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
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
        height: 60,
        fontSize: 20,
        fontWeight: 'bold',
        alignContent: 'center'
   },
});
