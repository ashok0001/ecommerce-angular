import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import {
  login,
  loginFailure,
  loginSuccess,
  register,
  registerFailure,
  registerSuccess
} from './auth.actions';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(login),
    switchMap(({ email, password }) =>
      this.authService.login(email, password).pipe(
        map((user) => loginSuccess({ user })),
        catchError(async (error) => loginFailure({ error }))
      )
    )
  )
);

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap(({ email, password,firstName,lastName }) =>
        this.authService.register(email, password,firstName,lastName).pipe(
          map(() => registerSuccess()),
          catchError(async(error) => registerFailure({ error }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
