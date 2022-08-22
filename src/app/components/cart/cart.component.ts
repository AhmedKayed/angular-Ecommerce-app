import { Component, OnInit } from '@angular/core';
import { cartProduct } from 'src/app/models/cartProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsInCart:cartProduct[]=[];
  total:number =0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.productsInCart=this.cartService.productsInCart();
    this.total=this.cartService.cartTotal();
  }

  removeFromCart(product:cartProduct):void{
    this.cartService.removeFromCart(product.product.id);
    this.productsInCart=this.cartService.productsInCart();
    this.total=this.cartService.cartTotal();

  }

 

}
