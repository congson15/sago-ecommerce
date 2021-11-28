import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface CartState {
    cartList: any,
}

const initialState: CartState = {
    cartList: localStorage.getItem('cart') || [],
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const index = state.cartList.findIndex((item:any) => item.id === newItem.id);
            if(index >= 0 ){
                state.cartList[index].quantity += newItem.quantity;
                return;
            }
            state.cartList.push(newItem);
        },
        setQuantity: (state,action) => {
            const { id, quantity } = action.payload;
            const index = state.cartList.findIndex((item:any) => item.id === id);
            if(index >= 0) {
                state.cartList[index].quantity = quantity;
            } 
        },
        removeFromCart: (state,action) => {
            const idRemove = action.payload;
            state.cartList = state.cartList.filter((item:any) => item.id !== idRemove);
            
        }
    }
})
export const { removeFromCart, setQuantity, addToCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.cartList;
export default cartSlice.reducer;