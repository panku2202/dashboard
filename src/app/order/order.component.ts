import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    // Subscribe to cartSubject to get updates on cart items
    this.orderService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
  }

  addToCart(item: any): void {
    this.orderService.addToCart(item);
  }

  removeFromCart(index: number): void {
    if (index >= 0 && index < this.cartItems.length) {
      const removedItem = this.cartItems.splice(index, 1)[0]; // Remove the item at the specified index
      this.calculateTotalPrice(); // Recalculate the total price
      console.log(`Removed ${removedItem.name} from the cart.`);
    }
  }

  calculateTotalPrice(): void {
    // Calculate the total price based on the items in the cart
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}