import { createSlice } from "@reduxjs/toolkit";

// const axios = require('axios');

const initialState = {
  username: "",
  email: "",
  password: "",
  password2: "",
  age: 0
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    register: (state, action) => {
        // console.log(action.payload);
        // update state with payload info
        Object.keys(state).forEach( key => {
          state[key] = action.payload[key];
          // console.log(state[key] , '<=====>' , action.payload[key]);

        } )
    },
    login: (state, action) => {
        
    },
    getData: (state, action) => {

    },
    updateData: (state, action) => {

    },
    deleteUser: (state, action) => {

    },
  },
});

export const { register, login, getData, updateData, deleteUser } =
  userSlice.actions;
export default userSlice.reducer;
