import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Product} from '../../entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsSet: Set<Product>;

  constructor(
    private httpClient: HttpClient
  ) {
    this.productsSet = new Set<Product>();
  }

  getProducts(): Product[] {
    this.httpClient.get<Product[]>('http://localhost:8080/product/find-all').subscribe(
      value => {
        this.productsSet = new Set(value);
      }
    );

    return [...this.productsSet];
  }

  createProduct(product: Product): void {
    let params = new HttpParams();
    params = params.append('name', product.name);
    params = params.append('cost', String(product.cost));
    params = params.append('category', product.category);
    params = params.append('description', product.description);
    params = params.append('sellerId', String(product.sellerId));

    this.httpClient.get('http://localhost:8080/product/create-product', {params}).subscribe();
  }

  deleteProduct(product: Product): void {
    let params = new HttpParams();
    params = params.append('id', String(product.id));

    this.httpClient.delete('http://localhost:8080/product/delete-by-id', {params}).subscribe();
  }
}
