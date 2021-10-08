import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    items : []
}

export const basketSlice = createSlice({
    name : "basket",
    initialState,
    reducers: {
        // actions 
        addToBasket :(state,action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket :(state, action) => {
            const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id)

            let newBasket = [...state.items]

            if(index >= 0) {
                newBasket.splice(index, 1)
            }else{
                console.warn(`cant remove product (id : ${action.payload.id}) is not present`)
            }

            state.items = newBasket
        }
    }
})

export const {addToBasket, removeFromBasket} = basketSlice.actions

//selectors - this is how we pull information from global store slice
export const selectItems = (state) => state.basket.items
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0)
export default basketSlice.reducer 