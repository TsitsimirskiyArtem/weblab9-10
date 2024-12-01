import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        setCart(state, action) {
            state.items = action.payload;
        },
        incrementQuantity(state, action) {
            const { id, type, power } = action.payload;
            const item = state.items.find(
                i => i._id === id && i.type === type && i.power === power
            );
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity(state, action) {
            const { id, type, power} = action.payload;
            const item = state.items.find(
                i => i._id === id && i.type === type && i.power === power
            );
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter(
                        i => !(i._id === id && i.type === type && i.power === power)
                    );
                }
            }
        },
        addItem(state, action) {
            const { id, type, power } = action.payload;
            const existingItem = state.items.find(
                item => item._id === id && item.type === type && item.power === power
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push({ ...action.payload, quantity: action.payload.quantity });
            }
        },  
    },
})

export const { setCart, incrementQuantity, decrementQuantity, addItem } = itemSlice.actions;
export default itemSlice.reducer
