// slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    user: null,
    loading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        login: (state, action) => {

            state.user = action.payload;
            state.loading = false;

        },

        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
