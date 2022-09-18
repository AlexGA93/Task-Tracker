// creating redux toolkit store
import { configureStore } from '@reduxjs/toolkit';

import userSlice from './reducers/usersSlice';
import cardSlice from './reducers/cardsSlice'; 

export const store = configureStore({
    reducer: {
        user: userSlice,
        cards: cardSlice
    },
});
