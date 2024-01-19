import styled from 'styled-components/native';
import {COLORS, SIZES} from '../../constants';

import Feather from 'react-native-vector-icons/Feather';

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-horizontal: ${SIZES.small}px;
  background-color: ${COLORS.secondary};
  border-radius: ${SIZES.medium}px;
  margin-vertical: ${SIZES.medium}px;
  height: 50px;
`;

export const SearchIcon = styled(Feather)`
  margin-horizontal: 10px;
  color: ${COLORS.gray};
  margin-top: ${SIZES.small}px;
`;

export const SearchWrapper = styled.View`
  flex: 1;
  background-color: ${COLORS.secondary};
  margin-right: ${SIZES.small}px;
  border-radius: ${SIZES.small}px;
`;

export const SearchInput = styled.TextInput`
  font-size: ${SIZES.small}px;
  width: 100%;
  height: 100%;
  padding-horizontal: ${SIZES.small}px;
`;
