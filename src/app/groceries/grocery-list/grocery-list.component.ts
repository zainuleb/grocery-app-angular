import { Component, OnInit } from '@angular/core';
import { Grocery } from '../grocery.interface';
import { GroceryListService } from '../grocery-list.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
})
export class GroceryListComponent implements OnInit {
  groceryList: Grocery[];

  private readonly unsubscribe$: Subject<void> = new Subject();

  constructor(private groceries: GroceryListService) {
    this.groceries
      .getProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        console.log(data);
        this.groceryList = data;
      });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
