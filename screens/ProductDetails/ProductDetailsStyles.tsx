import styled from 'styled-components/native';
import { SIZES, COLORS } from '../../constants';

export const Container = styled.View`
  flex: 1;
`;

export const BackButton = styled.TouchableOpacity`
  background-color: ${COLORS.lightWhite};
  border-radius: 50px;
  padding: 5px;
`;

export const ImageContainer = styled.View`
  aspect-ratio: 1;
  height: auto;
`;

export const ProductImage = styled.Image`
  flex: 1;
  resizeMode: cover;
`;

export const UpperRow = styled.View`
  margin-horizontal: 28px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: ${SIZES.xLarge}px;
  width: ${SIZES.width - 44}px;
  z-index: 9999;
`;

export const DetailsContainer = styled.View`
  margin-top: -${SIZES.xLarge}px;
  background-color: ${COLORS.lightWhite};
  width: ${SIZES.width}px;
  border-top-left-radius: ${SIZES.medium}px;
  border-top-right-radius: ${SIZES.medium}px;
  height: 100%;
`;

export const TitleRow = styled.View`
  margin-horizontal: 28px;
  padding-bottom: ${SIZES.small}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${SIZES.width - 44}px;
  top: 20px;
`;

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const DescriptionText = styled.Text`
  margin-horizontal: 28px;
  margin-top: 20px;
`;

export const CartRow = styled.View`
  margin-top: 10px;
  padding-bottom: ${SIZES.small}px;
  flex-direction: row;
  align-items: center;
  width: 110px;
`;

export const AddCartButton = styled.TouchableOpacity`
  margin-horizontal: 28px;
  width: 100%;
  height: 47px;
  padding: ${SIZES.small}px;
  border-radius: 50px;
  background-color: ${COLORS.black};
`;

export const CartTitle = styled.Text`
  color: ${COLORS.lightWhite};
  font-size: ${SIZES.medium}px;
`;
