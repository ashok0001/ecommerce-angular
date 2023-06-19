import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { productdata } from 'src/productsData';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  relatedProducts:any

  constructor(private router:Router){
    this.relatedProducts=productdata;
  }

  navigateToCart=()=>{
    this.router.navigate(['/cart'])
  }
}
