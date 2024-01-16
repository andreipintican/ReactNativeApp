import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useAuth} from '../../context/AuthContext';
import axios from 'axios';
import {
  Container,
  ProfileImageContainer,
  ProfileImage,
  ProfileDetailsContainer,
  Name,
  Company,
  Details,
  ButtonContainer,
  LoginStyle,
} from './ProfileStyles';

interface User {
  firstName: string;
  lastName: string;
  image: string;
  company: {
    department: string;
    title: string;
  };
  address: {
    city: string;
    address: string;
  };
  email: string;
  phone: string;
}

interface ProfileProps {
  navigation: any;
}

const profileDetailsUrl = 'https://dummyjson.com/auth/me';

const Profile: React.FC<ProfileProps> = props => {
  const [isLoading, setLoading] = useState(true);
  const {authState, onLogout}: any = useAuth();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User>(profileDetailsUrl, {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        });
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [authState.token]);

  const handleLogout = () => {
    onLogout();
    props.navigation.goBack();
  };

  const handleLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <React.Fragment>
          <ProfileImageContainer>
            <ProfileImage source={{uri: user?.image}} />
          </ProfileImageContainer>
          <ProfileDetailsContainer>
            <Name>{user?.firstName + ' ' + user?.lastName}</Name>
            <Company>
              {user?.company.department + ' - ' + user?.company.title}
            </Company>
            <Details>City: {user?.address.city}</Details>
            <Details>Street: {user?.address.address}</Details>
            <Details>Email: {user?.email}</Details>
            <Details>Phone: {user?.phone}</Details>
          </ProfileDetailsContainer>
          {authState.authenticated ? (
            <ButtonContainer onPress={handleLogout}>
              <LoginStyle>Logout</LoginStyle>
            </ButtonContainer>
          ) : (
            <ButtonContainer onPress={handleLogin}>
              <LoginStyle>Log In</LoginStyle>
            </ButtonContainer>
          )}
        </React.Fragment>
      )}
    </Container>
  );
};

export default Profile;
