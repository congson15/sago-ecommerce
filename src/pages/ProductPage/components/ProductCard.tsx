import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../CartPage/cartSlice';
import { toast } from 'react-toastify';


export interface ProductCardProps {
  product?: any,
}

export function ProductCard(props: ProductCardProps) {

  const dispatch = useDispatch();

  const handleAddToCart = (newItem: any) => {
    const actions = addToCart({
      id: newItem.id,
      name: newItem.name,
      price: newItem.price,
      quantity: 1,
    });
    dispatch(actions);
    toast.success('Added');

  }

  const { product } = props;
  return (
    <div className="relative p-4 mt-5 cursor-pointer">
      <div className="relative group" key={product.id}>
        <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-400 via-gray-300 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <img className="w-full" src="https://cdn.shopify.com/s/files/1/0145/5613/5478/products/product-1.jpg?v=1569556553" alt="A girl Posing Img" />
        <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
          <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full uppercase hover:border hover:bg-purple-500 hover:text-gray-50 transition-all delay-75" onClick={() => handleAddToCart(product)}>Add to cart</button>
          
        </div>
      </div>
      <Link to={`products/${product.slug}`}><p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4 cursor-pointer hover:text-purple-600">{product.name}</p> </Link>
      <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">${product.price}</p>
    </div>
  );
}
