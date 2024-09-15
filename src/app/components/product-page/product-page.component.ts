import { Component, inject } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

type Product = {
  id: number,
  thumbnail: string,
  price: string,
  title: string,
}

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  productService = inject(ProductServiceService)
  productDetail: Partial<Product> = {};
  activeRoute = inject(ActivatedRoute);
  ngOnInit() {
    let productId = this.activeRoute.snapshot.params['id'];
    this.productService.getSingleProduct(productId).subscribe((product) => {
      this.productDetail = product
    })
  }
}
