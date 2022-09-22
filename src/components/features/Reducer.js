import { createSlice } from "@reduxjs/toolkit";
// import {UsersData} from './FakeData';


export const userSlice=createSlice({
     name: "users",
    initialState:{
      value:[],
      curId: "",
    },
   
    reducers:{
      
            setCurId: (state, action) => {
              state.curId = action.payload;
            },

          addUser:(state, action)=>{
          state.value.push(action.payload);
          },
         
          updateSafe: (state, action) => {
            console.log(action.payload.id);
            state.value.forEach((user, index) => {
              if (user.id === action.payload.id) {
                state.value.splice(index, 1, action.payload);
              }
            });
          },

          // deleteUser:(state,action)=>{
          //  state.value=state.value.filter((user)=>user.id !== action.payload.id);
          //  state.curId=state.value[0].id;
          // },
        
          deleteUser: (state, action) => {
            state.value.forEach((user, index) => {
              if (user.id === action.payload.id) {
                state.value.splice(index, 1);
              }
            });
            state.curId = state.value[0];
          },

           addSecret: (state, action) => {
            state.value.forEach((user) => {
              if (user.id === action.payload.curId) {
                user.secret.push(action.payload.secret);
              }
            });
          },

          removeSecret: (state, action) => {
            state.value.forEach((secrets) => {
              secrets.secret.forEach((value, index) => {
                if (value === action.payload.id) {
                  secrets.secret.splice(index, 1);
                }
              });
            });
          },

    },
});


export const {addUser,addUserfolder,deleteUser,deleteUserfolder,updateSafe, addSecret,  setCurId,
  removeSecret,}=userSlice.actions;
export default userSlice.reducer;