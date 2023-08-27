import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        search: "",
        // placeholder: []
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                    picture:newItem.image,

                });
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
            localStorage.setItem('items', JSON.stringify(state.items));
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
            localStorage.setItem('items', JSON.stringify(state.items));
        },

        updateItemsOnCart(state) {
            let items = localStorage.getItem('items');
            if (items) {
                state.items = JSON.parse(items);
            }
        },

        updateSearch(state, action) {
            const search = action.payload;
            if (search) {
                state.search = search;
            }
        },
    }
})

const store = configureStore({ reducer: { cart: cartSlice.reducer } })

export default store;
export const cartActions=cartSlice.actions;
