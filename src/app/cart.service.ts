import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable()
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  /**
   * Adds a product to the cart
   * @product - the product to add
   */
  addToCart(product: Product) {
    this.items.push(product);
  }

  /**
   * Returns all items in the cart.
   */
  getItems() {
    return this.items;
  }

  /**
   * Clears all items from the cart.
   */
  clearCart() {
    this.items = [];
    return this.items;
  }

  /**
   * Gets shipping prices via an http request.
   */
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
