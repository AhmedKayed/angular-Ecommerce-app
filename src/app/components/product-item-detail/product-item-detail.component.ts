import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
    quantity:number =1;

    product: product =new product();

  constructor(private route: ActivatedRoute,private httpService: HttpService,private cartService:CartService) { }

  ngOnInit(): void {
    //to get the id parameter from the url
    const routeParams = this.route.snapshot.paramMap;
    let id:number = 0;
    id = Number(routeParams.get('id'));
    
    let ProductList:product[] = [];
    this.httpService.getProducts().subscribe(products => { 

      ProductList=products;
      for(let i =0;i<ProductList.length;i++){
        if(ProductList[i].id===id){
          this.product=ProductList[i];
        }
      }
    }); 

  }

  addToCart():void{
    this.cartService.addToCart(this.product.id,this.quantity);
  }


}
