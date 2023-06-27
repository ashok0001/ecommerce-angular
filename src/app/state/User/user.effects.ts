import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { getUserProfile, getUserProfileFailure, getUserProfileSuccess } from './Actions';
import { User } from 'src/app/Models/user.model';
import { UserService } from './user.service';

@Injectable()
export class UserEffects {
  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfile),
      switchMap(() =>
        this.userService.getUserProfile().pipe(
          map((userProfile) => {
            console.log("userProfile : ",userProfile)
            return getUserProfileSuccess({ userProfile })}),
          catchError(async (error) => getUserProfileFailure({ error }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
