import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { productsData } from '../../productsData';
import { CartProduct } from '../../types/productsType';

const products: CartProduct[] = productsData;

const initialState = {
  products: products,
  total: products.reduce((acc, product) => acc + product.price * product.quantity, 0)
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      const product = state.products.find(p => p.id === action.payload);
      if (product!.quantity < 10) {
        product!.quantity++;
        state.total += product!.price;
      }
    },
    decrement(state, action: PayloadAction<number>) {
      const product = state.products.find(p => p.id === action.payload);
      if (product!.quantity > 1) {
        product!.quantity--;
        state.total -= product!.price;
      }
    },
    deleteProduct(state, action: PayloadAction<number>) {
      const index = state.products.findIndex(p => p.id === action.payload);
      const product = state.products[index];
      state.total -= product.price * product.quantity;
      state.products.splice(index, 1);
    }
  }
});

export const { increment, decrement, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;