import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, AuthResponse } from './authTypes';

const initialState: AuthState = {
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authStart(state) {
            state.loading = true;
            state.error = null;
        },
        authSuccess(state, action: PayloadAction<AuthResponse>) {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.loading = false;
        },
        authFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const { authStart, authSuccess, authFailure, logout } = authSlice.actions;

export default authSlice.reducer;
