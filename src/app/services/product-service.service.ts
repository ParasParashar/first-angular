import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  httpClient = inject(HttpClient);
  // products = [
  //   {
  //     id: 1,
  //     name: 'Earphone',
  //     img: 'https://images.pexels.com/photos/748598/pexels-photo-748598.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     price: '$300'
  //   },
  //   {
  //     id: 2,
  //     name: 'Mobile Phone',
  //     img: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     price: '$2000'
  //   },
  //   {
  //     id: 3,
  //     name: 'Bag Pack ',
  //     img: 'https://images.pexels.com/photos/842947/pexels-photo-842947.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     price: '$800'
  //   },
  //   {
  //     id: 4,
  //     name: 'Tea Cups ',
  //     img: 'https://images.pexels.com/photos/860009/pexels-photo-860009.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     price: '&100'
  //   }
  // ];
  constructor() { }
  getProducts() {
    // return this.httpClient.get('https://dummyjson.com/products')
    return this.httpClient.get('https://dummyjson.com/products?sortBy=title&order=desc')
  }
  getSingleProduct(id: number) {
    return this.httpClient.get('https://dummyjson.com/products/' + id);
  }
  createNewProduct(product: Product) {
    return this.httpClient.post('https://dummyjson.com/products/add', product);
  }
}
