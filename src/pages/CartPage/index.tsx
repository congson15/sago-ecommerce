import * as React from 'react';
import { Footer } from '../../components/Common/Footer';
import { Header } from '../../components/Common/Header';
import { Cart } from './Cart';

export interface  CartPageProps {
}

export function CartPage (props:  CartPageProps) {
  return (
    <>
      <Header />
      <Cart />
      <Footer />
    </>
  );
}
