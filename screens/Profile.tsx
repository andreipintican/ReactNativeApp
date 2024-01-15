import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useAuth} from '../context/AuthContext';

interface ProfileProps {
  navigation: any; // Replace 'any' with the correct navigation type if possible
}

const Profile = (props: ProfileProps) => {
  const {authState, onLogout}: any = useAuth();

  const handleLogout = () => {
    onLogout();
    props.navigation.goBack();
  };
  const handleLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to your Profile!</Text>
      {authState.authenticated ? (
        <Button title="Logout" onPress={handleLogout} />
      ) : (
        <Button title="LogIn" onPress={handleLogin} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
