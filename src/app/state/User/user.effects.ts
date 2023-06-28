import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  getUserProfile,
  getUserProfileFailure,
  getUserProfileSuccess,
  logoutFailure,
  logoutSuccess,
  logout
} from './Actions';
import { User } from 'src/app/Models/user.model';
import { UserService } from './user.service';
import { of } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthComponent } from 'src/app/auth/auth.component';

@Injectable()
export class UserEffects {
  dialogRef!: MatDialogRef<AuthComponent>;

  // getUserProfile$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getUserProfile),
  //     switchMap(() =>
  //       this.userService.getUserProfile().pipe(
  //         map((userProfile) => {
  //           console.log('userProfile : ', userProfile);
           
  //           return getUserProfileSuccess({ userProfile });
            
  //         }),
  //         catchError(async (error) => getUserProfileFailure({ error }))
  //       )
  //     )
  //   )
  // );

  getUserProfile$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getUserProfile),
    switchMap(() =>
      this.userService.getUserProfile().pipe(
        tap((userProfile) => {
          console.log('userProfile: ', userProfile);
        }),
        switchMap((userProfile) => {
          return of(getUserProfileSuccess({ userProfile }));
        }),
        catchError((error) => of(getUserProfileFailure({ error })))
      )
    )
  )
);


  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      tap(() => {
        // Perform any additional cleanup or side effects here
        // For example, you can navigate to a different route or clear additional state
        this.userService.logout();
      }),
      map(() => logoutSuccess()),
      catchError((error) => of(logoutFailure(error)))
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
