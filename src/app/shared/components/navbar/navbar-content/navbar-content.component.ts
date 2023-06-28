import { Component, HostListener } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { womenCategory, womenCategorySection } from './navbarMenu';
import { CategoryItem } from 'src/app/Models/Category';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.scss']
})
export class NavbarContentComponent {

  

  womenSection=womenCategorySection;
  category=womenCategory
  items:CategoryItem[]= [
    { name: 'Tops', id:"top",  },
    { name: 'Dresses', id:"dress", },
    { name: 'Pants', id: 'pants' },
    { name: 'Lengha Choli', id: 'lengha_choli' },
    { name: 'Sweaters', id: 'sweater' },
    { name: 'T-Shirts', id: 't-shirt' },
    { name: 'Jackets', id: 'jacket' },
    { name: 'Gouns', id: 'gouns' },
    { name: 'Sarees', id: 'saree' },
    { name: 'Kurtas', id: 'kurtas' },
  ]

}
