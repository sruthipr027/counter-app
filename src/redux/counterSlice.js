import { createSlice } from "@reduxjs/toolkit";

//to consider this file has slice we should call createSlice() method
 export const counterSlice=createSlice({
    name:'counterApp',//any name no particular importance
    initialState:{
        value:0
    },
     //actions are created inside this reducers key as object
        //reducers key and reducer are not same
    reducers:{
      //logics to update state
      //we pass state as argument then only we get value in state

      //function to increment number
      increment:(state,action)=>{
        //if it is an argument function the it can only be accessed by action and value in payload

        state.value += action.payload

      },

     //function to decrement number
      decrement:(state,action)=>{
        state.value -= action.payload
      },

      //function to rest
      reset:(state)=>{
        state.value=0
      }
    }
})


//actions is required by component inorder to update state
export const {increment,decrement,reset}=counterSlice.actions

//reducer is required to store to change the state value
export default counterSlice.reducer