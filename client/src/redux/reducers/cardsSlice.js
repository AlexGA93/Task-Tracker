import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: '',
    title: '',
    subtitle: '',
    body: ''
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        getAllCards: (state, action)=>{},
        getCardById: (state, action)=>{},
        addNewCard: (state, action)=>{},
        updateCard: (state, action)=>{},
        deleteCard: (state, action)=>{}
    }
});

export const { getAllCards, getCardById, addNewCard, updateCard, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;
