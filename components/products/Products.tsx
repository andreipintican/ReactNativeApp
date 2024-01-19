import {View, ActivityIndicator, StyleSheet, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';

const productsURL = 'https://dummyjson.com/products';

const Products = ({products}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  if (products) {
    setData(products);
  }

  useEffect(() => {
    fetch(productsURL)
      .then(response => response.json())
      .then(json => setData(json.products))
      .catch(error => alert(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          numColumns={2}
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => <ProductCard item={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // paddingBottom: 315,
  },
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
});

export default Products;
