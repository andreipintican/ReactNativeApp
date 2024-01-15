import {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {SIZES, COLORS} from '../constants';
import {ActivityIndicator} from 'react-native';

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
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            style={styles.backBtn}
            name="arrow-left"
            size={28}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Image style={styles.image} source={{uri: data?.images[0]}} />
          <View style={styles.details}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>
                {data?.brand + ' ' + data?.title}
              </Text>
              <Text style={styles.title}>$ {data?.price}</Text>
            </View>
            <Text style={styles.titleRow}>{data?.description}</Text>
            <View style={styles.cartRow}>
              <TouchableOpacity onPress={() => {}} style={styles.addCart}>
                <Text style={styles.cartTitle}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: 50,
    padding: 5,
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  upperRow: {
    marginHorizontal: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xLarge,
    width: SIZES.width - 44,
    zIndex: 9999,
  },
  details: {
    marginTop: -SIZES.xLarge,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    height: '100%',
  },
  titleRow: {
    marginHorizontal: 28,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 44,
    top: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  cartRow: {
    marginTop: 10,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    alignItems: 'center',
    width: 110,
  },
  addCart: {
    width: '100%',
    height: 47,
    padding: SIZES.small,
    borderRadius: 50,
    margin: SIZES.small,
    backgroundColor: COLORS.black,
  },
  cartTitle: {
    color: COLORS.lightWhite,
    fontSize: SIZES.medium,
  },
});

export default ProductDetails;
