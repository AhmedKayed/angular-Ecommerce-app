import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ProductList: product[]= [];
  constructor(private HttpService:HttpService) { }

  ngOnInit(): void {
    // this.HttpService.getProducts().subscribe(products => { this.ProductList=products})
  }

}
