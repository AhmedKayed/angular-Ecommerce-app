import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { cartProduct } from '../models/cartProduct';
import { product } from '../models/product';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Cart:cartProduct[]=[];

  constructor(private httpService:HttpService) {
    this.httpService.getProducts().subscribe(products => {
      let productList:product[] = products;

      for(let i=0;i<productList.length;i++){
        this.Cart.push(new cartProduct);
        this.Cart[i].product= productList[i];
      }



    })

   }

  getCart():cartProduct[]{
    return this.Cart;
  }

  addToCart(id:number,quantity:number): void{
    for(let i =0;i<this.Cart.length;i++){
      if(this.Cart[i].product.id===id){
        this.Cart[i].quantity+=quantity;
      }
    }
  }

  removeFromCart(id:number):void{
    for(let i =0;i<this.Cart.length;i++){
      if(this.Cart[i].product.id===id){
        this.Cart[i].quantity=0;
      }
    }
  }

  cartTotal():number{
    let sum =0;
    for(let i=0;i<this.Cart.length;i++){
      sum+=(this.Cart[i].quantity*this.Cart[i].product.price)
    }
    return sum;
  }

  productsInCart():cartProduct[]{
    let productsInCart:cartProduct[]=[];
    for(let i=0;i<this.Cart.length;i++){
      if(this.Cart[i].quantity>0){
        productsInCart.push(this.Cart[i]);
      }
    }
    return productsInCart;

  }

  numberOfItemsInCart():number{
    let count=0;
    for(let i=0;i<this.Cart.length;i++){
      count+=this.Cart[i].quantity;
    }
    return count;
  }

  clearCart():void{
    for(let i=0;i<this.Cart.length;i++){
      this.Cart[i].quantity=0;
    }
  }



}

