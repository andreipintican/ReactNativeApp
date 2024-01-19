import styled from 'styled-components/native';
import {COLORS} from '../../constants';

//Cart
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin-bottom: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  padding: 8px;
  background-color: ${COLORS.tertiary};
  border-radius: 50px;
  margin-bottom: 15px;
`;

export const EmptyButton = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${COLORS.lightWhite};
`;

export const EmptyText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${COLORS.black};
  text-align-vertical: center;
  height: 100%;
`;

export const FlatListContainer = styled.View`
  flex: 1;
`;
// CartCard
export const ContainerCard = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const WrapperImageCheck = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerDetails = styled.View`
  justify-content: 'space-between';
`;

export const Details = styled.View`
  margin-bottom: 15px;
`;

export const TextDetails = styled.Text`
  font-weight: 800;
`;

export const TextQuantity = styled.Text`
  font-weight: 600;
  padding: 0 10px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-horizontal: 10px;
`;

export const ButtonRemove = styled.TouchableOpacity`
  border-width: 0.5px;
  border-radius: 4px;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

export const IconRemove = styled.Text`
  color: green;
  font-weight: 600;
`;

export const ButtonQuantity = styled.TouchableOpacity`
  border-width: 0.5px;
  border-radius: 4px;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

export const WrapperCardBottom = styled.View`
  flex-direction: row;
  align-items: center;
`;

//Footer

export const FooterContainer = styled.View`
  background-color: ${COLORS.primary};
  padding: 10px;
  align-items: center;
`;

export const TotalText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
