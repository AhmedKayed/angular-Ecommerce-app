import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { cartProduct } from '../models/cartProduct';
import { product } from '../models/product';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:cartProduct[]=[];

  constructor(private httpService:HttpService) {
    this.httpService.getProducts().subscribe(products => {
      let productList:product[] = products;
      //Adding each cartProduct into the cart array after tranforming all available products into a cartProduct with quantity =0 
      for(let i=0;i<productList.length;i++){
        this.cart.push(new cartProduct);
        this.cart[i].product= productList[i];
      }
    });
   }

  getCart():cartProduct[]{
    return this.cart;
  }

  addToCart(id:number,quantity:number): void{
    for(let i =0;i<this.cart.length;i++){
      if(this.cart[i].product.id===id){
        alert(this.cart[i].product.name+' has been added to your cart with quantity: '+ quantity);
        this.cart[i].quantity=Number(quantity)+this.cart[i].quantity;
      }
    }
  }

  removeFromCart(id:number):void{
    for(let i =0;i<this.cart.length;i++){
      if(this.cart[i].product.id===id){
        this.cart[i].quantity=0;
      }
    }
  }

  cartTotal():number{
    let sum =0;
    for(let i=0;i<this.cart.length;i++){
      sum+=(this.cart[i].quantity*this.cart[i].product.price)
    }
    return sum;
  }

  productsInCart():cartProduct[]{
    //returns an array of only the cartProducts with a greater quantity than zero
    let productsInCart:cartProduct[]=[];
    for(let i=0;i<this.cart.length;i++){
      if(this.cart[i].quantity>0){
        productsInCart.push(this.cart[i]);
      }
    }
    return productsInCart;

  }

  numberOfItemsInCart():number{
    let count=0;
    for(let i=0;i<this.cart.length;i++){
      count+=this.cart[i].quantity;
    }
    return count;
  }

  clearCart():void{
    for(let i=0;i<this.cart.length;i++){
      this.cart[i].quantity=0;
    }
  }

}