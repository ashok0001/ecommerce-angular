import { createReducer, on } from '@ngrx/store';
import { getUserProfile, getUserProfileFailure, getUserProfileSuccess } from './Actions';
import { User } from 'src/app/Models/user.model';

export interface UserState {
  userProfile: any;
  isLoading: boolean;
  error: any;
}

const initialState: UserState = {
  userProfile: null,
  isLoading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(getUserProfile, (state) => ({ ...state, isLoading: true, error: null })),
  on(getUserProfileSuccess, (state, { userProfile }) => ({ ...state, userProfile, isLoading: false })),
  on(getUserProfileFailure, (state, { error }) => ({ ...state, error, isLoading: false }))
);
