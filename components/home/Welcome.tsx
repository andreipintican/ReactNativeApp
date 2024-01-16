import {View, TouchableOpacity} from 'react-native';
import {
  Container,
  WelcomeText,
  SearchContainer,
  SearchIcon,
  SearchWrapper,
  SearchInput,
} from './WelcomeStyles';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Container>
        <WelcomeText>List Of Products</WelcomeText>
      </Container>

      <SearchContainer>
        <TouchableOpacity>
          <SearchIcon name="search" size={24} />
        </TouchableOpacity>
        <SearchWrapper>
          <SearchInput
            value=""
            onPressIn={() => navigation.navigate('Search')}
            placeholder="What are you looking for ?"
          />
        </SearchWrapper>
      </SearchContainer>
    </View>
  );
};

export default Welcome;
