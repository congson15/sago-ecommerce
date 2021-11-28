import * as React from 'react';
import { ProductCard } from './ProductCard';

export interface  ProductListProps {
  productList: Array<any>
}
let data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
export function ProductList (props:  ProductListProps) {
  let { productList } = props;
  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {productList.map((product,index) => {
        return(
          <ProductCard key={index} product={product}/>
        )
      })}
    </div>
  );
}
