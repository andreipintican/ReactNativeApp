import React from 'react';
import {FooterContainer, TotalText} from './CartStyles';

const Footer = ({items}) => {
  const totalPrice = items.reduce(
    (total: number, item: {quantity: number; price: number}) =>
      total + item.quantity * item.price,
    0,
  );
  return (
    <FooterContainer>
      <TotalText>Total Price: ${totalPrice.toFixed(2)}</TotalText>
    </FooterContainer>
  );
};

export default Footer;
