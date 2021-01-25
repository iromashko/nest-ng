import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  animations: [
    trigger('tableState', [
      state(
        'show',
        style({
          maxHeight: '150px',
        })
      ),
      state(
        'hide',
        style({
          maxHeight: 0,
        })
      ),
      transition('show => hide', animate('1000ms ease-in')),
      transition('hide => show', animate('1000ms ease-out')),
    ]),
  ],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  lastPage: number;
  selected: number;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.load();
  }

  load(page = 1): void {
    this.ordersService.all(page).subscribe((res) => {
      this.orders = res.data;
      this.lastPage = res.meta.last_page;
    });
  }

  select(id: number): void {
    this.selected = this.selected === id ? 0 : id;
  }

  itemState(id: number): string {
    return this.selected === id ? 'show' : 'hide';
  }
}
