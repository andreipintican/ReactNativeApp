import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  AppBarWrapper,
  AppBar,
  CartCountWrapper,
  CartNumberText,
} from './HomeStyles';
import {Welcome} from '../../components';
import Products from '../../components/products/Products';

const Home = () => {
  return (
    <SafeAreaView>
      <AppBarWrapper>
        <AppBar>
          <View style={{alignItems: 'flex-end'}}>
            <CartCountWrapper>
              <CartNumberText>0</CartNumberText>
            </CartCountWrapper>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </AppBar>
      </AppBarWrapper>
      <Welcome />
      <Products />
    </SafeAreaView>
  );
};

export default Home;
