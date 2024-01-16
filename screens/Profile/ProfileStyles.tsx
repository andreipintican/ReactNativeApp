import styled from 'styled-components/native';
import {COLORS} from '../../constants';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;

export const ProfileImageContainer = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.5;
  margin: 20px;
`;

export const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 75px;
`;

export const ProfileDetailsContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Company = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Details = styled.Text`
  font-size: 16px;
  color: #666;
  padding-vertical: 5px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  padding: 8px;
  background-color: ${COLORS.primary};
  border-radius: 50px;
`;

export const LoginStyle = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: white;
`;
