import { Component } from '@angular/core';
import { productdata } from 'src/productsData';
import { filters, singleFilter } from './FilterData';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  // standalone: true,
  // imports: [],
})
export class ProductsComponent {

  products:any[]=[]
  filterItems:any[] | undefined
  singleFilterItems:any[] | undefined

  constructor(  private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location){
    this.products=productdata;
    this.filterItems=filters
    this.singleFilterItems=singleFilter;
  }

  handleMultipleSelectFilter(value: string, sectionId: string): void {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };

  const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(',') : [];

  const valueIndex = filterValues.indexOf(value);

  console.log(queryParams,filterValues)

  if (valueIndex !== -1) {
    filterValues.splice(valueIndex, 1);
  } else {
    filterValues.push(value);
  }

  if (filterValues.length > 0) {
    queryParams[sectionId] = filterValues.join(',');
  } else {
    delete queryParams[sectionId];
  }

  this.router.navigate([], { queryParams });
  }

  handleSingleSelectFilter(value: string, sectionId: string): void {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };

    queryParams[sectionId] = value;

    this.router.navigate([], { queryParams });
  }

  nativateToProductDetailPage(){
    this.router.navigate(['/product-details'])
  }
  

}
