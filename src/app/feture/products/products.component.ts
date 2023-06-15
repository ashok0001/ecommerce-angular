import { Component } from '@angular/core';
import { productdata } from 'src/productsData';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  // standalone: true,
  // imports: [],
})
export class ProductsComponent {

  products:any[]=[]

  constructor(){
    this.products=productdata;
  }

}
