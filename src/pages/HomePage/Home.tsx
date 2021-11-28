import * as React from 'react';
import { Header } from '../../components/Common/Header';
import { Footer } from '../../components/Common/Footer';
import { Policy } from './Policy';
import { RelatedProduct } from './Related';
import { Hero } from './Hero';
import { Banner } from './Banner';


export function HomePage() {

  return (
    <div>
      <Header />
      <Hero />
      <Policy />
      <RelatedProduct />
      <Banner />
      <Footer />
      
    </div>
  );
}
