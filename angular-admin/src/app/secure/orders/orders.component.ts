import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  lastPage: number;

  constructor() {}

  ngOnInit(): void {}

  load(page = 1): void {
    //
  }
}
