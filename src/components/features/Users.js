import { createSlice } from "@reduxjs/toolkit";
// import {UsersData} from './FakeData';


export const userSlice=createSlice({
     name: "users",
    initialState:{
      value:[],
      value1:[]
    },

    reducers:{
          addUser:(state, action)=>{
state.value.push(action.payload);
          },
          addUserfolder:(state, action)=>{
            state.value1.push(action.payload);
                      },
          updateSafe: (state, action) => {
            state.value.forEach((safe,index) =>{
           
              if (safe.id === action.payload.id) {
                state.value.splice(index, 1, action.payload);
              }
            });
          },

          deleteUser:(state,action)=>{
           state.value=state.value.filter((user)=>user.id !== action.payload.id);
          },
          deleteUserfolder:(state,action)=>{
            state.value1=state.value1.filter((user)=>user.id !== action.payload.id);
           },
    },
});

export const {addUser,addUserfolder,deleteUser,deleteUserfolder,updateSafe}=userSlice.actions;
export default userSlice.reducer;