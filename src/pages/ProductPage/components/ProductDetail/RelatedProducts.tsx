import * as React from 'react';
import { ProductCard } from '../ProductCard';
export interface RelatedProductsProps {
}

const data = [
    {
      "id": 2,
      "name": "adidas Trae Young 1 Light Solid Grey Snakeskin",
      "slug": "adidas-trae-young-1-light-solid-grey-snakeskin",
      "productPrice": 300,
      "brand": {
        "id": 2,
        "name": "Adidas",
        "slug": "adidas"
      },
      "gender": "men",
      "productImages": [
        {
          "image": "images/gfg_E3Gg9Ry.png"
        }
      ]
    },
    {
      "id": 8,
      "name": "Wmns Air Max 90 'Lucky Charms'",
      "slug": "wmns-air-max-90-lucky-charms",
      "productPrice": 93,
      "brand": {
        "id": 1,
        "name": "Nike",
        "slug": "nike"
      },
      "gender": "men",
      "productImages": []
    }
  ]

export function RelatedProducts(props: RelatedProductsProps) {
    return (
        <div className="container mt-10">
            <h3 className="font-bold text-my-color uppercase text-2xl">YOU MIGHT ALSO LIKE </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-row">
                {data.map(product => <ProductCard product={product}/>)}
            </div>
        </div>
    );
}
