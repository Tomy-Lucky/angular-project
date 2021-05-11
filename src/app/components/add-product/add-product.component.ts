import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/product/products.service';
import {Product} from '../../entities/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product;

  constructor(
    private productsService: ProductsService
  ) {
    this.product = {
      id: 1,
      name: '',
      cost: 0,
      category: '',
      description: '',
      sellerId: 1
    };
  }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productsService.createProduct(this.product);
  }
}
