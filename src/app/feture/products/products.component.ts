import { Component } from '@angular/core';
import { productdata } from 'src/productsData';
import { filters, singleFilter } from './FilterData';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/state/Auth/auth.reducer';
import { findProductsByCategoryRequest } from 'src/app/state/Product/Actions';
import { AppState } from 'src/app/Models/AppState';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  // standalone: true,
  // imports: [],
})
export class ProductsComponent {

  private routerEventsSubscription: Subscription | undefined;
  private routeQueryParamsSubscription: Subscription | undefined;

  products:any[]=[]
  filterItems:any[] | undefined
  singleFilterItems:any[] | undefined
  lavelOne!: string | null;
  lavelTwo!: string | null;
  lavelThree!: string | null;
  fetchedProducts$: Observable<any> = new Observable<any>();
  
  



  ngOnInit() {
    // const updatedReqData = { ...this.reqData,category:this.lavelThree };
    var reqData = {
      category: this.route.snapshot.paramMap.get('lavelThree'),
      colors: [],
      sizes:  [],
      minPrice:  0,
      maxPrice: 10000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 10,
      stock: null,
    };
    this.store.dispatch(findProductsByCategoryRequest({reqData}))

    this.routerEventsSubscription=this.activatedRoute.paramMap.subscribe(params=>{
      
      const updatedReqData = Object.assign({}, reqData, {
        category: params.get("lavelThree"),
      });
      this.store.dispatch(findProductsByCategoryRequest({reqData:updatedReqData}))
      console.log("reqData - change",this.lavelThree,updatedReqData)
    })
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Get the updated URL parameters
        this.lavelOne = this.route.snapshot.paramMap.get('lavelOne');
        this.lavelTwo = this.route.snapshot.paramMap.get('lavelTwo');
        this.lavelThree = this.route.snapshot.paramMap.get('lavelThree');

        
      }
     
    });

    this.routeQueryParamsSubscription= this.route.queryParams.subscribe(params => {
      const color = params['color']; // Retrieves the value of the 'color' parameter
      const size = params['size']; // Retrieves the value of the 'size' parameter
      const price = params['price']; // Retrieves the value of the 'price' parameter
      const discount = params['disccout']; // Retrieves the value of the 'discount' parameter
      const stock = params['stock']; // Retrieves the value of the 'stock' parameter
  
      const minPrice=0
      const maxPrice=9999


  
    // this.store.dispatch(findProductsByCategoryRequest({reqData:updatedReqData}))
    console.log(this.store.select((state: AppState) => state.product))
    console.log("activate route ",this.route.url)
  });

  this.fetchedProducts$ = this.store.select((state: AppState) => state.product.products.content);

  this.fetchedProducts$.subscribe((products: any) => {
    console.log("Products from store - ", products.content);
  });


  // this.store.dispatch(findProductsByCategoryRequest({reqData:updatedReqData}))
  
  }

  ngOnDestroy() {
    // Unsubscribe from subscriptions to avoid memory leaks
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }

    if (this.routeQueryParamsSubscription) {
      this.routeQueryParamsSubscription.unsubscribe();
    }
  }

  constructor(  private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private store:Store<AppState>)
    {
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

  nativateToProductDetailPage(id:string){
    this.router.navigate([`/product-details/${id}`])
  }

  
  

}
