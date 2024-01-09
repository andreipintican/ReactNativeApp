/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useFonts} from 'expo-font';
import {useCallback} from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import {Cart, ProductDetails} from './screens';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  // const [fontsLoaded] = useFonts({
  //   regular: require('./assets/fonts/Poppins-Regular.ttf'),
  //   light: require('./assets/fonts/Poppins-Light.ttf'),
  //   bold: require('./assets/fonts/Poppins-Bold.ttf'),
  //   medium: require('./assets/fonts/Poppins-Medium.ttf'),
  //   extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
  //   semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     // await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom navigation"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;