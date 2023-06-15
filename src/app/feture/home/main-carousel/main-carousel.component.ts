import { Component } from '@angular/core';
import { Product } from 'src/app/Domain/product';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent  {

  products: Product[]=[ {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
{
    id: '1001',
    code: 'nvklal433',
    name: 'Black Watch',
    description: 'Product Description',
    image: 'black-watch.jpg',
    price: 72,
    category: 'Accessories',
    quantity: 61,
    inventoryStatus: 'OUTOFSTOCK',
    rating: 4
},
{
    id: '1002',
    code: 'zz21cz3c1',
    name: 'Blue Band',
    description: 'Product Description',
    image: 'blue-band.jpg',
    price: 79,
    category: 'Fitness',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 3
},
{
    id: '1003',
    code: '244wgerg2',
    name: 'Blue T-Shirt',
    description: 'Product Description',
    image: 'blue-t-shirt.jpg',
    price: 29,
    category: 'Clothing',
    quantity: 25,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
{
    id: '1004',
    code: 'h456wer53',
    name: 'Bracelet',
    description: 'Product Description',
    image: 'bracelet.jpg',
    price: 15,
    category: 'Accessories',
    quantity: 73,
    inventoryStatus: 'INSTOCK',
    rating: 4
},
{
    id: '1005',
    code: 'av2231fwg',
    name: 'Brown Purse',
    description: 'Product Description',
    image: 'brown-purse.jpg',
    price: 120,
    category: 'Accessories',
    quantity: 0,
    inventoryStatus: 'OUTOFSTOCK',
    rating: 4
},
{
    id: '1006',
    code: 'bib36pfvm',
    name: 'Chakra Bracelet',
    description: 'Product Description',
    image: 'chakra-bracelet.jpg',
    price: 32,
    category: 'Accessories',
    quantity: 5,
    inventoryStatus: 'LOWSTOCK',
    rating: 3
},
{
    id: '1007',
    code: 'mbvjkgip5',
    name: 'Galaxy Earrings',
    description: 'Product Description',
    image: 'galaxy-earrings.jpg',
    price: 34,
    category: 'Accessories',
    quantity: 23,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
{
    id: '1008',
    code: 'vbb124btr',
    name: 'Game Controller',
    description: 'Product Description',
    image: 'game-controller.jpg',
    price: 99,
    category: 'Electronics',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 4
},
{
    id: '1009',
    code: 'cm230f032',
    name: 'Gaming Set',
    description: 'Product Description',
    image: 'gaming-set.jpg',
    price: 299,
    category: 'Electronics',
    quantity: 63,
    inventoryStatus: 'INSTOCK',
    rating: 3
},
{
    id: '1010',
    code: 'plb34234v',
    name: 'Gold Phone Case',
    description: 'Product Description',
    image: 'gold-phone-case.jpg',
    price: 24,
    category: 'Accessories',
    quantity: 0,
    inventoryStatus: 'OUTOFSTOCK',
    rating: 4
},];

  responsiveOptions: any[]=[];

  // constructor(private productService: ProductService) {}

  ngOnInit() {
      // this.productService.getProductsSmall().then((products) => {
      //     this.products = products;
      // });

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

  // getSeverity(status: string) {
  //     switch (status) {
  //         case 'INSTOCK':
  //             return 'success';
  //         case 'LOWSTOCK':
  //             return 'warning';
  //         case 'OUTOFSTOCK':
  //             return 'danger';
  //     }
  // }

}
