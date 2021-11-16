import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

import { Grocery } from '../../api/groceries/interfaces/grocery.interface';
import { GroceryService } from 'src/app/api/groceries/services/grocery.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss'],
})
export class GroceryListComponent implements OnInit {
  groceryList: Grocery[];

  private readonly unsubscribe$: Subject<void> = new Subject();

  constructor(private groceries: GroceryService, private router: Router) {
    this.groceries
      .getProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.groceryList = data;
      });
  }

  ngOnInit(): void {}
  productDetail(id: number): void {
    this.router.navigate([`groceries/${id}`]);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
