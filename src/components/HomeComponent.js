import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import SpaceComponent from './SpaceComponent'
import NewsListRowComponent from './NewsListRowComponent';

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Home Screen",
            news: [
                { key: 'Devin 1' },
                { key: 'Dan' },
                { key: 'Dominic' },
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SpaceComponent />
                <FlatList
                    data={this.state.news}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this._onNewsItemPress(item)}>
                            <NewsListRowComponent />
                        </TouchableOpacity>
                    }

                />
            </View>
        );
    }

    _onNewsItemPress(item) {
        this.props.navigation.navigate('NewsDetails', {
            item: item
        });
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
