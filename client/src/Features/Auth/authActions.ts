import { AppDispatch } from '../../Redux/store';
import axios from 'axios';
import { authStart, authSuccess, authFailure, logout } from './authSlice';
import { LoginData, RegisterData, AuthResponse } from './authTypes';

const API_URL = 'https://api.example.com/auth';

export const login = (loginData: LoginData) => async (dispatch: AppDispatch) => {
    dispatch(authStart());
    try {
        const response = await axios.post<AuthResponse>(`${API_URL}/login`, loginData);
        dispatch(authSuccess(response.data));
    } catch (error) {
        dispatch(authFailure(error.message));
    }
};

export const register = (registerData: RegisterData) => async (dispatch: AppDispatch) => {
    dispatch(authStart());
    try {
        const response = await axios.post<AuthResponse>(`${API_URL}/register`, registerData);
        dispatch(authSuccess(response.data));
    } catch (error) {
        dispatch(authFailure(error.message));
    }
};

export const logoutUser = () => (dispatch: AppDispatch) => {
    dispatch(logout());
};
