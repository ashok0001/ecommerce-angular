import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/Models/user.model';

export const getUserProfile = createAction('[User] Get User Profile');
export const getUserProfileSuccess = createAction(
  '[User] Get User Profile Success',
  props<{ userProfile: User | null }>()
);
export const getUserProfileFailure = createAction(
  '[User] Get User Profile Failure',
  props<{ error: any }>()
);
