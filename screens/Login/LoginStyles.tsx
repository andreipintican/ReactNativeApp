import React from 'react';
import styled from 'styled-components/native';
import {SIZES, COLORS} from '../../constants';

interface ButtonProps {
  onPress: Function;
  title: string;
}

export const ViewContainer = styled.View`
  margin: 0;
  padding: 0;
  background-color: ${COLORS.secondary};
  width: 100%;
  height: 100%;
`;

export const InnerView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  width: 100%;
  padding: 1.3rem;
`;

const ButtonContainer = styled.TouchableOpacity`
  width: 250px;
  height: 40px;
  padding: 8px;
  background-color: ${COLORS.primary};
  border-radius: 50px;
`;

const LoginStyle = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: white;
`;

export const LabelStyle = styled.Text`
  font-size: 35px;
  text-align: center;
  margin-bottom: 14px;
  font-weight: bold;
  padding: 8px;
`;

export const InputStyle = styled.TextInput`
  width: 250px;
  height: 40px;
  border-radius: 15px;
  margin-bottom: 22px;
  background-color: ${COLORS.lightWhite};
  font-size: 14px;
  padding: 10px;
`;

export const LoginButton: React.FC<ButtonProps> = ({onPress, title}) => {
  return (
    <ButtonContainer onPress={onPress}>
      <LoginStyle>{title}</LoginStyle>
    </ButtonContainer>
  );
};
