import * as React from 'react';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { cartTotalSelector } from './selectors';
import { EmptyCart } from './EmptyCart';
import { removeFromCart, setQuantity } from './cartSlice';

export interface CartProps {
}

export function Cart(props: CartProps) {

    const cartList = useAppSelector(state => state.cart.cartList);
    const cartTotal = useSelector(cartTotalSelector);
    const dispatch = useDispatch();


    const handleRemoveItemFromCart = (productId: number) => {
        const actions = removeFromCart(productId);
        dispatch(actions);
    }

    const handleQuantityChange = (productId: number, quantity: number) => {
        const actions = setQuantity({
            id: productId,
            quantity: quantity
        });
        dispatch(actions);
    }

    return (
        <>
            {cartList.length > 0 ? <div className="p-8 mx-auto mt-12 max-w-screen-xl">
                <div className="overflow-x-auto">
                    <div className="my-2">
                        <h3 className="text-xl font-bold tracking-wider text-my-color">Cart ({cartList.length})</h3>
                        <div className="md:grid grid-cols-6 gap-2 border-b-1 mt-5 hidden">
                            <h3 className="col-span-4  font-bold text-my-color  uppercase w-2/5">Product</h3>
                            <div className="col-span-2">
                                <div className=" flex justify-between">
                                    <h3 className="font-bold  text-my-color text-sm uppercase w-1/5">Quantity</h3>
                                    <h3 className="hidden md:block text-center font-bold text-sm text-my-color uppercase w-1/5">Price</h3>
                                    <h3 className="font-bold  text-my-color text-sm uppercase w-1/5">Subtotal</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white lg:block">
                        <ul className="py-6 border-b space-y-6">
                            {cartList.map((cartItem: any) => <CartItem product={cartItem} handleRemoveItemFromCart={handleRemoveItemFromCart} handleQuantityChange={handleQuantityChange} />)}
                        </ul>
                    </div>
                    <div className="lg:w-2/4">
                        <div className="mt-4">
                            <div className="px-4 py-4 rounded-md">
                                <label className="font-semibold text-my-color">Discount</label>
                                <input type="text" placeholder="coupon code" value="SAGO#234" className="
                            w-full
                            px-2
                            py-2
                            border border-blue-600
                            rounded-md
                            outline-none
                        "/>
                                <span className="block text-green-600">Success</span>
                                <button className="
                            px-6
                            py-2
                            mt-2
                            text-sm text-gray-50
                            bg-purple-500
                            rounded-md
                            hover:bg-purple-600
                        "> Apply </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="py-4 rounded-md shadow">
                            <h3 className="text-xl font-bold text-my-color">Summary</h3>
                            <div className="flex justify-between px-4">
                                <span className="font-bold">Subtotal</span>
                                <span className="font-bold text-red-600">${cartTotal}</span>
                            </div>
                            <div className="flex justify-between px-4">
                                <span className="font-bold">Shipping</span>
                                <span className="font-bold text-red-600">FREE</span>
                            </div>
                            <div className="flex justify-between px-4">
                                <span className="font-bold">Discount</span>
                                <span className="font-bold text-red-600">0</span>
                            </div>
                            <div className="
                    flex
                    items-center
                    justify-between
                    px-4
                    py-2
                    mt-3
                    border-t-2
                    ">
                                <span className="text-xl font-bold">Total</span>
                                <span className="text-2xl font-bold text-red-600 ">${cartTotal}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col xl:flex-row-reverse">
                        <Link to="/checkout" className="
                    w-full
                    xl:w-1/4
                    py-5    
                    xl:my-5
                    xl:mr-5
                    text-center 
                    text-white
                    bg-purple-500
                    shadow  
                    hover:bg-purple-600
                    rounded-md
                    uppercase
                "> Checkout </Link>
                        <Link to="/collections/all" className="
                    w-full
                    xl:w-1/4
                    py-5    
                    my-5
                    xl:mr-5
                    text-center 
                    text-white
                    bg-gray-500
                    shadow  
                    hover:bg-gray-600
                    rounded-md
                    uppercase
                "> Buy more products
                </Link>
                    </div>
                </div>
            </div>
                :
                <EmptyCart />

            }
        </>
    );
}
