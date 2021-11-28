import { createSelector } from "@reduxjs/toolkit";

const cartItemSelector = (state: any) => state.cart.cartList;

export const cartItemsCountSelector = createSelector(cartItemSelector, (cartItems) =>
    cartItems.reduce((count: number, item: any) => count + item.quantity, 0)
);

export const cartTotalSelector = createSelector(cartItemSelector, (cartItems) =>
    cartItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0)
)