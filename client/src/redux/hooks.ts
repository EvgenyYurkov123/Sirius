import { useSelector, useDispatch } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

type DispatchFunc = () => ThunkDispatch<RootState, any, AnyAction>;

export const useAppDispatch: DispatchFunc = (): AppDispatch => useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
