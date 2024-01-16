import {
  SearchContainer,
  SearchIcon,
  SearchWrapper,
  SearchInput,
} from './SearchStyles';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {SIZES} from '../../constants';

const Search = () => {
  return (
    <SafeAreaView>
      <SearchContainer>
        <TouchableOpacity>
          <SearchIcon name="search" size={SIZES.xLarge} />
        </TouchableOpacity>
        <SearchWrapper>
          <SearchInput
            value=""
            onPressIn={() => {}}
            placeholder="What are you looking for ?"
          />
        </SearchWrapper>
      </SearchContainer>
    </SafeAreaView>
  );
};

export default Search;
