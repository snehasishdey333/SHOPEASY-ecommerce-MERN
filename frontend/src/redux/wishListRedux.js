import {createSlice} from "@reduxjs/toolkit"

const wishListSlice=createSlice({
    name:"wishlist",
    initialState:{
        products:[],
        quantity:0
    },
    reducers:{
        addProductW:(state,action)=>{
            state.quantity+=1
            state.products.push(action.payload)
            // state.total+=action.payload.price*action.payload.quantity
        },
        removeProductW: (state, action) => {
            state.products.splice(
              state.products.findIndex((i) => i._id === action.payload.id),
              1
            );
            state.quantity -= 1;
            // state.total -= action.payload.total;
          },
    }
})

export const  {addProductW,removeProductW} =wishListSlice.actions
export default wishListSlice.reducer