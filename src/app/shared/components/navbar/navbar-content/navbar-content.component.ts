import { Component, HostListener,Input } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { menCategory, womenCategory } from './navbarMenu';
import { CategoryItem } from 'src/app/Models/Category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.scss']
})
export class NavbarContentComponent {

  @Input()
  selectedSection!: string;

  category = this.selectedSection=="men"? menCategory:womenCategory;

  ngOnInit() {
    console.log(" input - ",this.selectedSection=="men",this.selectedSection=="women")
  }
  constructor(private router:Router){}

  navigateToProducts=(path:String)=>{
this.router.navigate([path])
  }
  
}
