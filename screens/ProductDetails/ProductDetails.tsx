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
} from './ProductDetailsStyles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constants';

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
          <CartRow>
            <AddCartButton onPress={() => {}}>
              <CartTitle>Add to cart</CartTitle>
            </AddCartButton>
          </CartRow>
        </DetailsContainer>
      )}
    </Container>
  );
};

export default ProductDetails;
