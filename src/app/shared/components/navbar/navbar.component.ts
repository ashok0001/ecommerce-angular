import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isProfileMenuOpen:boolean =false;

  handleProfileMenuOpen(){
    this.isProfileMenuOpen=!this.isProfileMenuOpen;
    console.log("handle profile menu -------- ")
  }

  handleProfileMenuClose(){
    this.isProfileMenuOpen=false;
  }

}
