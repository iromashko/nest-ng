import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    let chart = c3.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        columns: [
          ['x', '2020-1-1', '2020-2-2'],
          ['Sales', 20, 40],
        ],
        types: {
          Sales: 'bar',
        },
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d',
          },
        },
      },
    });

    this.ordersService
      .chart()
      .subscribe((result: { date: string; sum: number }[]) => {
        chart.load({
          columns: [
            ['x', ...result.map((r) => r.date)],
            ['Sales', ...result.map((r) => r.sum)],
          ],
        });
      });
  }
}
