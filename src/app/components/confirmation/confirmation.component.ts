import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  numberOfItems:number=0;
  priceOfItems:number=0;

  constructor(private cartService:CartService, private router:Router) { }

  ngOnInit(): void {
    this.numberOfItems=this.cartService.numberOfItemsInCart();
    this.priceOfItems=this.cartService.cartTotal();
    this.cartService.clearCart();
    
    if(this.numberOfItems===0){
      //If the user typed the url/confirmation
      this.router.navigateByUrl('/');
    }
  }

}
