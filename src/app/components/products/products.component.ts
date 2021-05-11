import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/product/products.service';
import {Product} from '../../entities/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(
    private productsService: ProductsService
  ) {
    this.products = productsService.getProducts();
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  deleteProduct(product: Product): void {
    this.productsService.deleteProduct(product);
  }
}
