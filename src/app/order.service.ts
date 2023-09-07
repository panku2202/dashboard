import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private cartItems: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);

  constructor() { }

  addToCart(item: any): void {
    this.cartItems.push(item);
    this.cartSubject.next(this.cartItems);
  }

  getCartItems(): BehaviorSubject<any[]> {
    return this.cartSubject;
  }
}
