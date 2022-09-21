import { createSlice } from "@reduxjs/toolkit";
// import {UsersData} from './FakeData';


export const userSlice=createSlice({
     name: "users",
    initialState:{
      value:[],
      // value1:[],
      // activeId:"",
      curId: "",
    },
   
    reducers:{
      
            // setActiveId:(state,action)=>{
            //   state.activeId=action.payload;
              
            // },
            setCurId: (state, action) => {
              state.curId = action.payload;
            },

          addUser:(state, action)=>{
state.value.push(action.payload);
          },
         
          updateSafe: (state, action) => {
            state.value.forEach((user,index) =>{
           
              if (user.id === action.payload.id) {
                state.value.splice(index, 1, action.payload);
              }
            });
          },

          deleteUser:(state,action)=>{
           state.value=state.value.filter((user)=>user.id !== action.payload.id);
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

 // addUserfolder:(state, action)=>{
          //   state.value1.push(action.payload);
          //             },

  // deleteUserfolder:(state,action)=>{
          //   state.value1=state.value1.filter((user)=>user.id !== action.payload.id);
          //  },

export const {addUser,addUserfolder,deleteUser,deleteUserfolder,updateSafe, addSecret,  setCurId,
  removeSecret,}=userSlice.actions;
export default userSlice.reducer;