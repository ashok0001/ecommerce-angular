import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/Models/AppState';
import { User } from 'src/app/Models/user.model';
import { AuthComponent } from 'src/app/auth/auth.component';
import { getUserProfile } from 'src/app/state/User/Actions';
import { UserState } from 'src/app/state/User/Reducer';
import { selectUserProfile } from 'src/app/state/User/user.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  isProfileMenuOpen:boolean =false;
  userProfile$!: Observable<any>

  selectUser = createSelector(
    (state: AppState) => state.user,
    (user) => user
  );

  constructor(  private dialog: MatDialog, private router:Router, private store: Store<AppState>){}

  handleProfileMenuOpen(){
    this.isProfileMenuOpen=!this.isProfileMenuOpen;
    console.log("handle profile menu -------- ")
  }

  handleProfileMenuClose(){
    this.isProfileMenuOpen=false;
  }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '400px',
      disableClose: false
    });
  }

  navigateToCart=()=>{
    this.router.navigate(["cart"])
  }

  ngOnInit() {
    
    if(localStorage.getItem("jwt"))this.store.dispatch(getUserProfile())

    this.userProfile$ = this.store.select((state: AppState) => state.user.userProfile);
 
    this.userProfile$.subscribe((userProfile: any) => {
      console.log("user profile ------ ", userProfile, userProfile?.firstName);
    });
   
  }



  dispatchGetUserProfileAction=()=>{
    console.log("dispatchGetUserProfileAction")
    this.store.dispatch(getUserProfile())

  }

}
