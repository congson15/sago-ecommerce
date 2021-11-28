import * as React from 'react';
import { useSelector } from 'react-redux';
import { Footer } from '../../components/Common/Footer';
import { Header } from '../../components/Common/Header';
import { useAppSelector } from '../../hooks';
import { cartTotalSelector } from '../CartPage/selectors';
import { Checkout } from './Checkout';

export interface  CheckoutPageProps {
}

export function CheckoutPage (props:  CheckoutPageProps) {
  const cartList = useAppSelector(state => state.cart.cartList);
  const cartTotal = useSelector(cartTotalSelector);
  return (
    <>
      <Header />
      <Checkout cartList={cartList} cartTotal={cartTotal}/>
      <Footer />
    </>
  );
}
