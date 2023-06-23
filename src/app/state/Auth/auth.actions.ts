import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/Models/user.model';
// import { User } from './user.model';

export const login = createAction('[Auth] Login', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ user: User | null }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: any }>());

export const register = createAction('[Auth] Register', props<{firstName:string, lastName:string, email: string, password: string, fullName:string, mobile:string }>());
export const registerSuccess = createAction('[Auth] Register Success');
export const registerFailure = createAction('[Auth] Register Failure', props<{ error: any }>());
