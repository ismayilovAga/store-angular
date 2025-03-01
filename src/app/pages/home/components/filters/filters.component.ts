import { Component, EventEmitter, OnDestroy, OnInit, Output, OutputEmitterRef } from '@angular/core';
import { StoreService } from '../../../../services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categoriesSubscription: Subscription | undefined;
  categories: Array<string> | undefined;

  constructor(private storeService: StoreService) { }
  
  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    };
  }
  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories()
      .subscribe((response) => {

        this.categories = response;

      });
  }

   

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  } 

}
