import { Component, OnInit, Input } from '@angular/core';
import { product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:product = new product();
  quantity:number = 1;

// new Product() is just used so it wont be null

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  addToCart():void{
    this.cartService.addToCart(this.product.id,this.quantity);
  }


}
