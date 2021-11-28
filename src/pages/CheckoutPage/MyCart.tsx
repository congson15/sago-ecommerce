import * as React from 'react';
import { MyCartItem } from './components/MyCartItem';

export interface MyCartProps {
    cartList: Array<object>,
    cartTotal: number,
}

export function MyCart({ cartList, cartTotal = 0 }: MyCartProps) {


    return (
        <div className="bg-white lg:block">
            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
            <ul className="py-6 border-b space-y-6">
                {cartList.map(product => <MyCartItem product={product}/>)}
            </ul>
            <div className="border-b">
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-red-500">{cartTotal}$</span>
                </div>
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-red-600">FREE</span>
                </div>
                <div className="flex justify-between py-4 text-gray-600">
                    <span>Discount</span>
                    <span className="font-semibold text-red-500">0</span>
                </div>
            </div>
            <div className="font-semibold text-xl flex justify-between py-8 text-my-color">
                <span>Total</span>
                <span className="font-medium text-red-500">{cartTotal}$</span>
            </div>
            <button className="submit-button px-4 py-5  bg-purple-500 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                Check out
            </button>
        </div>
    );
}
