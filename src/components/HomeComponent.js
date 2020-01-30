import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderComponent from './HeaderComponent';

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Home 123 Screen",
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderComponent title={this.props.title}/>
                <Text>
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
    },
});
