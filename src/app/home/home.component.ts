import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foodItems: any[] = [
    {
     name: 'Burger',
     price: 6.99,
     image: 'assets/image/burger.png'
    },
    {
     name: 'Pizza',
     price: 9.99,
     image: 'assets/image/pizza.png'
    },
    {
      name: 'Soup',
      price: 4.99,
      image: 'assets/image/soup.png'
     },
     {
      name: 'Maggie',
      price: 3.99,
      image: 'assets/image/maggie.png'
     },
     {
      name: 'Noodles',
      price: 6.99,
      image: 'assets/image/noodles.png'
     },
     {
      name: 'Pasta',
      price: 5.99,
      image: 'assets/image/pasta.png'
     },
     
    
];

addToCart(item: any): void {
  // Add your cart logic here
  this.orderService.addToCart(item);
  console.log(`Added ${item.name} to the cart.`);
}
  constructor(private orderService:OrderService) { }
 
  ngOnInit(): void {
    
  }
  

}
