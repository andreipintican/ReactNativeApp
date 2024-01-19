import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import {
  Container,
  BackButton,
  ImageContainer,
  ProductImage,
  UpperRow,
  DetailsContainer,
  TitleRow,
  TitleText,
  DescriptionText,
  CartRow,
  AddCartButton,
  CartTitle,
  QuantityButton,
  QuantityContainer,
  QuantityText,
} from './ProductDetailsStyles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../store/CartReducer';

interface Product {
  id: number;
  images: string[];
  brand: string;
  title: string;
  price: number;
  description: string;
}

interface ProductDetailsProps {
  route: {
    params: {
      id: number;
    };
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({route}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Product | null>(null);
  const {id} = route.params;
  const navigation = useNavigation();

  const productURL = `https://dummyjson.com/products/${id}`;

  useEffect(() => {
    fetch(productURL)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => alert(error))
      .finally(() => setLoading(false));
  }, [productURL]);

  const dispatch = useDispatch();

  const cartItem = useSelector(state =>
    state.cart.cart.find(item => item.id === id),
  );

  console.log('cartItem found ', cartItem);

  const addItemToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  const removeItemFromCart = (item: any) => {
    dispatch(removeFromCart(item));
  };

  const increaseQuantity = (item: any) => {
    if (!item.quantity) {
      dispatch(addToCart(item));
    }
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item: any) => {
    if (item.quantity == 1) {
      dispatch(removeFromCart(item));
    } else if (!item.quantity) {
      return;
    } else {
      dispatch(decrementQuantity(item));
    }
  };

  return (
    <Container>
      <UpperRow>
        <BackButton onPress={() => navigation.goBack()}>
          <FontAwesomeIcon name="arrow-left" size={28} color={COLORS.primary} />
        </BackButton>
      </UpperRow>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <DetailsContainer>
          <ImageContainer>
            <ProductImage source={{uri: data?.images[0]}} />
          </ImageContainer>
          <TitleRow>
            <TitleText>{data?.brand + ' ' + data?.title}</TitleText>
            <TitleText>$ {data?.price}</TitleText>
          </TitleRow>
          <DescriptionText>{data?.description}</DescriptionText>
          {cartItem ? (
            <CartRow>
              <AddCartButton onPress={() => removeItemFromCart(cartItem)}>
                <CartTitle>Remove from cart</CartTitle>
              </AddCartButton>
              <QuantityContainer>
                <QuantityButton onPress={() => decreaseQuantity(cartItem)}>
                  <CartTitle>-</CartTitle>
                </QuantityButton>
                <QuantityText>{cartItem.quantity}</QuantityText>
                <QuantityButton onPress={() => increaseQuantity(cartItem)}>
                  <CartTitle>+</CartTitle>
                </QuantityButton>
              </QuantityContainer>
            </CartRow>
          ) : (
            <CartRow>
              <AddCartButton onPress={() => addItemToCart(data)}>
                <CartTitle>Add to cart</CartTitle>
              </AddCartButton>
              <QuantityContainer>
                <QuantityButton onPress={() => decreaseQuantity(data)}>
                  <CartTitle>-</CartTitle>
                </QuantityButton>
                <QuantityText>1</QuantityText>
                <QuantityButton onPress={() => increaseQuantity(data)}>
                  <CartTitle>+</CartTitle>
                </QuantityButton>
              </QuantityContainer>
            </CartRow>
          )}
        </DetailsContainer>
      )}
    </Container>
  );
};

export default ProductDetails;
