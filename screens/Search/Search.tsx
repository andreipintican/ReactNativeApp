import {
  SearchContainer,
  SearchIcon,
  SearchWrapper,
  SearchInput,
} from './SearchStyles';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SIZES} from '../../constants';
import Products from '../../components/products/Products';
import axios from 'axios';

const Search = () => {
  const [data, setData] = useState(null);

  const searchProduct = async text => {
    const searchUrl = `https://dummyjson.com/products/search?q=${text}`;
    try {
      const response = await axios.get(searchUrl);

      console.log('response.data', response.data.products);
      // setData(response.data.products);
    } catch (error) {
      console.error('error');
    }
  };

  return (
    <SafeAreaView>
      <SearchContainer>
        <TouchableOpacity>
          <SearchIcon name="search" size={SIZES.xLarge} />
        </TouchableOpacity>
        <SearchWrapper>
          <SearchInput
            placeholder="What are you looking for ?"
            onChangeText={text => searchProduct(text)}
          />
        </SearchWrapper>
      </SearchContainer>
      <Products products={data} />
    </SafeAreaView>
  );
};

export default Search;
