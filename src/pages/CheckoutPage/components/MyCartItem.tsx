import * as React from 'react';

export interface MyCartItemProps {
    product:any;
}

export function MyCartItem(props: MyCartItemProps) {
    const { product } = props;
    return (
        <li className="grid grid-cols-6 gap-2 border-b-1">
            <div className="col-span-1 self-center">
                <img src="https://giayxshop.vn/wp-content/uploads/2020/09/z2077503002271_01faf21b4b4c32f91923383638f5b371-300x300.jpg" alt="Product" className="rounded w-full" />
            </div>
            <div className="flex flex-col col-span-3 pt-2">
                <span className="text-gray-600 text-md font-semi-bold">{product.name}</span>
                <span className="md:hidden block text-gray-600">{product.quantity}</span>
            </div>
            <div className="col-span-2 pt-3">
                <div className="flex items-center justify-end space-x-2 md:justify-between">
                    <span className="text-my-color hidden md:inline-block">{product.quantity}x{product.price}$</span>
                    <span className="text-red-500 font-semibold inline-block">{product.quantity*product.price}$</span>
                </div>
            </div>
        </li>
    );
}
