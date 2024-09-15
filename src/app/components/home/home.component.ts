import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchComponent } from '../search/search.component';
import { ProductServiceService } from '../../services/product-service.service';

export type Product = {
  id: number,
  thumbnail: string,
  price: string,
  title: string,
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [];
  allProducts: Product[] = [];
  productService = inject(ProductServiceService);

  ngOnInit() {
    // Fetching products from the service
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
      this.allProducts = [...this.products];
    });
  }

  onViewProduct(event: string) {
    console.log('Name of Product Click ', event);
  }

  onSearchEventFilter(searchTerm: string) {
    if (searchTerm === '') {
      // Reset to original products list when search is cleared
      this.products = [...this.allProducts];
    } else {
      // Filter products based on search term
      this.products = this.allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}
