import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { GroceryService } from '../api/groceries/services/grocery.service';
import { GroceryImageList } from '../api/groceries/interfaces/groceryImageList.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  imageList: GroceryImageList[] = [];

  private readonly unsubscribe$: Subject<void> = new Subject();
  constructor(private groceries: GroceryService, private router: Router) {
    this.groceries
      .getProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        data &&
          data.forEach((item) => {
            this.imageList.push({ path: item.image });
          });
      });
    console.log(this.imageList);
  }

  productDetail(id: number): void {
    this.router.navigate([`groceries/${id}`]);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {}
}
