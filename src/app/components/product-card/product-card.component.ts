
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

type productType = {
  id: number,
  thumbnail: string,
  price: string,
  title: string,
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  router = inject(Router);

  // this is how we take input in the component or pass data to the component
  @Input() product!: productType;
  // @output()this is how we take input from component to parent component
  @Output() viewProduct = new EventEmitter<string>();;
  // functions use in the class
  addToCart = (price: string) => {
    console.log(this.product.title, 'is a product name and price is ', price);
    this.viewProduct.emit(this.product.title)
  };
  onClickProduct(productId: number) {
    this.router.navigateByUrl(`/product/${productId}`)
  }
}


