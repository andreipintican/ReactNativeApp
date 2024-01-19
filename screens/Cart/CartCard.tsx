import {Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../store/CartReducer';

import {
  ContainerCard,
  WrapperImageCheck,
  ButtonRemove,
  IconRemove,
  ButtonQuantity,
  ProductImage,
  WrapperCardBottom,
  ContainerDetails,
  Details,
  TextDetails,
  TextQuantity,
} from './CartStyles';

interface Cart {
  id: number;
  title: string;
  images: string[];
  brand: string;
  price: number;
}

interface CartCardProps {
  item: Cart;
}

const CartCard: React.FC<CartCardProps> = ({item}) => {
  console.log('item =====>', item);
  const dispatch = useDispatch();

  const removeItemFromCart = (item: any) => {
    dispatch(removeFromCart(item));
  };

  const increaseQuantity = (item: any) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item: any) => {
    if (item.quantity == 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decrementQuantity(item));
    }
  };

  return (
    <ContainerCard>
      <WrapperImageCheck>
        <ButtonRemove onPress={() => removeItemFromCart(item)}>
          <IconRemove>X</IconRemove>
        </ButtonRemove>
        <ProductImage
          source={{
            uri: 'https://images.pexels.com/photos/3586249/pexels-photo-3586249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        />
      </WrapperImageCheck>
      <ContainerDetails>
        <Details>
          <TextDetails>{item.title}</TextDetails>
          <TextDetails>$ {item.price}</TextDetails>
        </Details>
        <WrapperCardBottom>
          <ButtonQuantity onPress={() => decreaseQuantity(item)}>
            <TextDetails>-</TextDetails>
          </ButtonQuantity>
          <TextQuantity>{item.quantity}</TextQuantity>
          <ButtonQuantity
            style={{borderColor: 'green'}}
            onPress={() => increaseQuantity(item)}>
            <IconRemove>+</IconRemove>
          </ButtonQuantity>
        </WrapperCardBottom>
      </ContainerDetails>
    </ContainerCard>
  );
};
export default CartCard;
