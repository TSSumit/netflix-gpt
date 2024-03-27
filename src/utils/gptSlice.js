import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'user',
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        toggleGptSearch:(state, action)=>{
            state.showGptSearch=!state.showGptSearch;
        }
    }
})
export const { toggleGptSearch }=gptSlice.actions;
export default gptSlice.reducer;