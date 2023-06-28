import { Component, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/Models/AppState';
import { User } from 'src/app/Models/user.model';
import { AuthComponent } from 'src/app/auth/auth.component';
import { getUserProfile, logout } from 'src/app/state/User/Actions';
import { UserState } from 'src/app/state/User/Reducer';
import { selectUserProfile } from 'src/app/state/User/user.selector';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  isProfileMenuOpen:boolean =false;
  userProfile$!: Observable<any>

  dialogRef?: MatDialogRef<AuthComponent>;

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
    this.dialog.open(AuthComponent, {
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
      if(userProfile){
        this.dialogRef?.close();
      }
    });
   
  }



  dispatchGetUserProfileAction=()=>{
    this.store.dispatch(getUserProfile())

  }

  handleLogout=()=>{
    console.log("logout success");
    this.store.dispatch(logout());
  }

  open: boolean = false;
  selectedTabIndex: number = 0;

 

  setOpen(open: boolean): void {
    this.open = open;
  }

  isNavbarContentOpen = false;
  currentSection!:string

  openNavbarContent(section:string) {
    this.isNavbarContentOpen = true
    this.currentSection=section
    console.log(section)
  }

  closeNavbarContent() {
    this.isNavbarContentOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modalContainer = document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('.open-button');

    let clickedInsideButton = false;
    

    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickedInsideButton = true;
      }
    });

    if (modalContainer && !clickedInsideButton && !modalContainer.contains(event.target as Node) && this.isNavbarContentOpen) {
      console.log("container ---------------------- ",this.isNavbarContentOpen)
      this.closeNavbarContent();
    }
  }

}
