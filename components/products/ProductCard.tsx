import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAuth} from '../../context/AuthContext';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../../store/CartReducer';
import { COLORS } from '../../constants';

interface Product {
  id: number;
  title: string;
  images: string[];
  brand: string;
  price: number;
}

interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({item}) => {
  const {authState}: any = useAuth();

  const navigation = useNavigation();

  const handleProductPress = () => {
    navigation.navigate('ProductDetails', {id: item.id});
  };

  const handleAddToCartPress = () => {
    if (authState.authenticated) {
      return navigation.navigate('Cart');
    }
    return navigation.navigate('Login');
  };

  const cart = useSelector(state => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const addItemToCart = (item: any) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item: any) => {
    dispatch(removeFromCart(item));
  };

  return (
    <TouchableOpacity style={{flex: 1}} onPress={handleProductPress}>
      <View style={styles.card}>
        <Text style={{marginBottom: 8, fontWeight: 800}}>{item.title}</Text>
        {item.images[0] ? (
          <Image style={styles.image} source={{uri: item.images[0]}} />
        ) : (
          <Text>No Image Available</Text>
        )}
        <View style={styles.details}>
          <Text style={{fontWeight: 800, color: COLORS.red}}>{item.discountPercentage}%</Text>
          <Text style={{marginBottom: 8, fontWeight: 800}}>{item.price}$</Text>
        </View>
      </View>
      {cart.some((value: {id: number}) => value.id == item.id) ? (
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => removeItemFromCart(item)}>
          <Ionicons name="remove-circle" size={30} color={COLORS.red} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => addItemToCart(item)}>
          <Ionicons name="add-circle" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    shadowOpacity: 0.2,
    flexGrow: 1,
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
    width: 100,
  },
  details: {
    width: 100,
  },
  addBtn: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
});

export default ProductCard;
