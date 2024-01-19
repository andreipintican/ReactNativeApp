import {FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import CartCard from './CartCard';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import Footer from './FooterCart';
import {useDispatch} from 'react-redux';
import {emptyCart} from '../../store/CartReducer';
import {
  Header,
  BackButton,
  Title,
  Container,
  ButtonContainer,
  EmptyButton,
  EmptyText,
  FlatListContainer,
} from './CartStyles';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const emptyListOfProducts = () => {
    dispatch(emptyCart());
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <FontAwesomeIcon name="arrow-left" size={28} color={COLORS.primary} />
        </BackButton>
        <Title>Cart products</Title>
      </Header>
      <FlatListContainer>
        {cart.length ? (
          <FlatList
            numColumns={1}
            data={cart}
            keyExtractor={({id}) => id}
            renderItem={({item}) => <CartCard item={item} />}
          />
        ) : (
          <EmptyText>Cart is empty</EmptyText>
        )}
      </FlatListContainer>
      {cart.length ? (
        <ButtonContainer onPress={() => emptyListOfProducts()}>
          <EmptyButton>Empty List</EmptyButton>
        </ButtonContainer>
      ) : null}
      <Footer items={cart} />
    </Container>
  );
};
export default Cart;
