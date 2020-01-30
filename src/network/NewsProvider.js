import * as rssParser from 'react-native-rss-parser';

const CONSTANTS = require('../utils/Constants');

export default class NewsProvider {
    static getTopNews() {
        return fetch(CONSTANTS.BASE_URL)
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                return rss.items;                
            });
    }

    static getNewsDetail(index) {
        return fetch(CONSTANTS.BASE_URL)
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                return rss.items[index];
            });
    }
}