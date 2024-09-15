import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from '../../services/product-service.service';
import { Router } from '@angular/router';


type Product = {
  id: number,
  thumbnail: string,
  price: string,
  title: string,
};

@Component({
  selector: 'app-add-product-page',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './add-product-page.component.html',
  styleUrl: './add-product-page.component.css'
})

export class AddProductPageComponent {
  router = inject(Router);
  product: Product = {
    id: 0,
    price: '',
    thumbnail: '',
    title: '',
  };
  productService = inject(ProductServiceService);

  onFormSubmit() {
    console.log('Form submitted successfully', this.product);
    this.productService.createNewProduct(this.product).subscribe((res) => {
      alert("Product created successfully")
      console.log(res)
    })
    this.router.navigateByUrl('/')
  }
}

