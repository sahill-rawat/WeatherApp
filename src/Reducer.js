import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    city: 'Delhi',
};

export const customReducer = createReducer(initialState, {

    changeCity: (state, action) => {
        state.city = action.payload;
    }
});
