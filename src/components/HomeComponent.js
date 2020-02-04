import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import SpaceComponent from './SpaceComponent'
import NewsListRowComponent from './NewsListRowComponent';
import NewsProvider from '../network/NewsProvider';
import SplashScreen from 'react-native-splash-screen'
import NetInfo from "@react-native-community/netinfo";

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            title: "Home Screen",
            news: [],
        };
    }

    componentDidMount() {
        SplashScreen.hide();
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            if (state.isConnected) {
                console.log('Internet is connected');
                this.getnews()
            } else {
                alert("You are not connected to Internet. Please connect and then retry.");
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.news}
                    keyExtractor={item => item.id}
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.isFetching}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this._onNewsItemPress(item)}>
                            <NewsListRowComponent title={item.title} newsItem={item} />
                        </TouchableOpacity>
                    }

                />
            </View>
        );
    }

    // get the top news
    async getnews() {
        var newsItems = await NewsProvider.getTopNews();
        console.log(JSON.stringify(newsItems))
        this.setState({ news: newsItems })
        this.setState({ isFetching: false })
    }

    // News Items row click listener, pass the News Item to the NewsDetailComponent
    _onNewsItemPress(item) {
        this.props.navigation.navigate('NewsDetails', {
            item: item
        });
    }

    onRefresh() {
        this.setState({ isFetching: true }, function () { this.getnews() });
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
