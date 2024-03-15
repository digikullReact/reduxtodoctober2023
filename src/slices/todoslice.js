import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   list:[],
   inputState:"",
  }
const todoSlice=createSlice({
    name: 'todo',
    initialState,
    reducers:{
        // actions defined here
        addtodo:(state,action)=>{
           state.list.push(action.payload);

        },

        deletetodo:(state,action)=>{
            console.log(state.list)
            state.list=state.list.filter(ele=>ele.id!=action.payload);
 
         },
        changeInputState:(state,action)=>{
             state.inputState=action.payload;
        }
    }

})

// We have to export two things from here 
// first is reducer for the store

export default todoSlice.reducer;


// we will export the actions
export const {addtodo,changeInputState,deletetodo} =todoSlice.actions