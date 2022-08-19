import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { cartProduct } from 'src/app/models/cartProduct';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input() product:cartProduct=new cartProduct();
  @Output() remove= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }



}
