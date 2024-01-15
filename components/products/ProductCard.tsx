import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Product {
  title: string;
  images: string[];
  brand: string;
  price: number;
}

interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({item}) => {
  const navigation = useNavigation();

  const handleProductPress = () => {
    navigation.navigate('ProductDetails', { id: item.id });
  };

  const handleAddToCartPress = () => {
    navigation.navigate('Cart');
  };

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={handleProductPress}>
      <View style={styles.card}>
        <Text style={{ marginBottom: 5, fontFamily: 'bold' }}>{item.title}</Text>
        {item.images[0] ? (
          <Image style={styles.image} source={{ uri: item.images[0] }} />
        ) : (
          <Text>No Image Available</Text>
        )}
        <View style={styles.details}>
          <Text>{item.brand}</Text>
          <Text>{item.price}$</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addBtn} onPress={handleAddToCartPress}>
        <Ionicons name="add-circle" size={30} />
      </TouchableOpacity>
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
    right: 10,
    bottom: 10,
  },
});

export default ProductCard;
