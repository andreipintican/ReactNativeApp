import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
  AppBarWrapper,
  AppBar,
  HeaderContainer,
  WelcomeText,
  CartCountWrapper,
  CartNumberText,
} from './HomeStyles';
import {Welcome} from '../../components';
import Products from '../../components/products/Products';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Home = () => {
  const navigation = useNavigation();
  const cart = useSelector(state => state.cart.cart);
  const totalCartItems = cart.reduce(
    (total: number, item: {quantity: number}) => total + item.quantity,
    0,
  );
  return (
    <SafeAreaView>
      <AppBarWrapper>
        <AppBar>
          <View></View>
          <WelcomeText>List Of Products</WelcomeText>
          <HeaderContainer>
            <CartCountWrapper>
              <CartNumberText>{totalCartItems}</CartNumberText>
            </CartCountWrapper>
            <TouchableOpacity onPressIn={() => navigation.navigate('Cart')}>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </HeaderContainer>
        </AppBar>
      </AppBarWrapper>
      <Welcome />
      <Products />
    </SafeAreaView>
  );
};

export default Home;
