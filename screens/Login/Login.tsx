import React, {useState} from 'react';
import {
  LoginButton,
  ViewContainer,
  InnerView,
  InputStyle,
  LabelStyle,
} from './LoginStyles';
import {useAuth} from '../../context/AuthContext';

interface LoginScreenProps {
  navigation: any;
}

const Login = (props: LoginScreenProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {authState, onLogin}: any = useAuth();

  console.log('test', authState);
  const handleLogin = () => {
    if (username && password) {
      onLogin(username, password, props);
      if (!authState.authenticated) {
        return;
      }
    }
  };

  return (
    <ViewContainer>
      <InnerView>
        <LabelStyle>Login</LabelStyle>
        <InputStyle
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <InputStyle
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <LoginButton title="Login" onPress={handleLogin} />
      </InnerView>
    </ViewContainer>
  );
};

export default Login;
