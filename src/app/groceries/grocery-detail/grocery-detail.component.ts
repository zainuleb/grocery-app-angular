import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { GroceryService } from 'src/app/services/grocery.service';
import { Grocery } from '../grocery.interface';

@Component({
  selector: 'app-grocery-detail',
  templateUrl: './grocery-detail.component.html',
  styleUrls: ['./grocery-detail.component.css'],
})
export class GroceryDetailComponent implements OnInit {
  gorceryItem: Grocery;

  id;

  private readonly unsubscribe$: Subject<void> = new Subject();

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private groceryDetail: GroceryService
  ) {}

  sub;

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.groceryDetail
        .getProduct(this.id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((data) => {
          console.log(data);
          this.gorceryItem = data;
        });

      console.log(this.gorceryItem);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
