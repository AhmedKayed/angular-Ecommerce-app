import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  NumberOfItems:number=0;
  PriceOfItems:number=0;

  constructor(private CartService:CartService) { }

  ngOnInit(): void {
    this.NumberOfItems=this.CartService.numberOfItemsInCart();
    this.PriceOfItems=this.CartService.cartTotal();
    this.CartService.clearCart();
  }

}
