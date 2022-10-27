import { createSlice } from "@reduxjs/toolkit";

import api from '../../api/axios';

const initialState = {
  process_ok: true,
  uid:"",
  name: "",
  secondName: "",
  age: 0,
  email: "",
  token:""
};

const decryptToken = ( token ) => {
  
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    register: (state, action) => {
        api
          // make request with payload
          .post('api/auth/register', action.payload)
          // dealing with the response
          .then( ( response ) => {
            const { process_ok, token } = response.data;
            if(process_ok){
              // store JWT in local storage
              localStorage.setItem('x-token', token);
            }
          })
          .catch((error) => console.warn(error.message));
    },
    login: (state, action) => {
        
    },
    getData: (state, action) => {
      // send token to a route to verify token
      api
        .get('api/auth/', {
          headers: {
            'x-token': action.payload
          }
        })
        .then( userData => {
          // print user data obtained by token
          console.log(userData);
        })
        .catch((error) => console.warn(error.message))
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
