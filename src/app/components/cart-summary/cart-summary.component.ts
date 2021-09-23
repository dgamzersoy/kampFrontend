import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
   cartItems:CartItem[]=[];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  this.getCart();

  }
  getCart(){
    this.cartItems=this.cartService.list();
  }

  removeItem(product:Product){
    this.cartService.removeFromCart(product);
    
    

  }

}
