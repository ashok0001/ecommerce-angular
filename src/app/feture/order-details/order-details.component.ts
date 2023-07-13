import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { OrderService } from 'src/app/state/Order/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {

  order:any
  constructor(private store:Store<AppState>,private orderService:OrderService,private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    // this.orderService.getOrderById({orderId:this.activatedRoute.paramMap.ge})
    this.activatedRoute.paramMap.subscribe(params=>{
      const orderId=params.get("orderId")
      console.log("order id params ",orderId)
      if(orderId)
      this.orderService.getOrderById(orderId)
    })

    this.store.pipe(select(state=>state.order)).subscribe(order=>{
      this.order=order.order
      console.log("order from state ",this.order)
    })
  }

}
