import { Component, inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-edit-product-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit-product-page.component.html',
  styleUrl: './edit-product-page.component.css'
})
export class EditProductPageComponent {
  activeRouter = inject(ActivatedRoute);
  productService = inject(ProductServiceService);
  router = inject(Router);
  // using form build module to use form
  formBuild = inject(FormBuilder)
  productForm: FormGroup = this.formBuild.group({
    title: ['', Validators.required],
    thumbnail: [''],
    price: [''],
  });
  ngOnInit() {
    let productId = this.activeRouter.snapshot.params['id'];
    this.productService.getSingleProduct(productId).subscribe(product => {
      this.productForm.patchValue(product)
    })
  }
  editProduct() {
    if (this.productForm.invalid) {
      alert('Please Fill all the fields in the form')
      return
    }
    console.log(this.productForm.value);
    alert('Edit Product Successfully');
    this.router.navigateByUrl('/')
  }
}
