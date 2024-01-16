import styled from 'styled-components/native';
import {COLORS, SIZES} from '../../constants';

export const AppBarWrapper = styled.View`
  margin-horizontal: 22px;
  margin-top: ${SIZES.small}px;
`;

export const AppBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CartCountWrapper = styled.View`
  position: absolute;
  bottom: 16px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  align-items: center;
  background-color: green;
  justify-content: center;
  z-index: 999;
`;

export const CartNumberText = styled.Text`
  font-family: 'regular';
  font-weight: 600;
  font-size: 10px;
  color: ${COLORS.lightWhite};
`;
