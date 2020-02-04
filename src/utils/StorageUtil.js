import AsyncStorage from '@react-native-community/async-storage';

export default class StorageUtil {

    // stores the provided data againt the key
    static storeData(key, value) {
        this.clearStorage()

        // then insert new value to key
        AsyncStorage.setItem(key, value)
    }

    // reads the data based on the provided key from the storage
    static readData(key) {
        return AsyncStorage.getItem(key)
    }

    // clears the storage
    static clearStorage(key) {
        return AsyncStorage.clear()
    }
}