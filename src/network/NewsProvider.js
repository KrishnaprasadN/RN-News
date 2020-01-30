import * as rssParser from 'react-native-rss-parser';

const CONSTANTS = require('../utils/Constants');

export default class NewsProvider {
    // gets the list of top news
    static getTopNews() {
        return fetch(CONSTANTS.BASE_URL)
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                return rss.items;                
            });
    }

    // returns the news details for the provided index
    // since there are no unique id for news, we use news index to get the details
    static getNewsDetail(index) {
        return fetch(CONSTANTS.BASE_URL)
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                return rss.items[index];
            });
    }
}