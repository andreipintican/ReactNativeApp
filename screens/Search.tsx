import styles from './search.style';
import {View, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {SIZES} from '../constants';
import Feather from 'react-native-vector-icons/Feather';

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather
            name="search"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => {}}
            placeholder="What are you looking for ?"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
