import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullwidthMode = false;

  @Input() product: Product | undefined;

  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
