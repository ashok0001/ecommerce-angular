import { Component } from '@angular/core';
import { productdata } from 'src/productsData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products:any[]=[]

  constructor() {
    this.products = productdata.slice(0, 5);
  }

}
