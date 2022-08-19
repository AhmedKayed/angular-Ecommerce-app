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

  Product: product ={id:0,name:"",price:0,url:"",description:""} ;
  // ProductList:product[] = [];

  constructor(private route: ActivatedRoute,private httpService: HttpService,private cartService:CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id:number = 0;
    id = Number(routeParams.get('id'));

    let ProductList:product[] = [];

    this.httpService.getProducts().subscribe(products => { 

      ProductList=products;
      for(let i =0;i<ProductList.length;i++){
        if(ProductList[i].id===id)
          this.Product=ProductList[i];
      }
    });    
  }

  setQuantity(quantity:String):void{
    this.quantity=Number(quantity);
  }

  addToCart():void{
    alert(this.Product.name+' has been added with quantity: '+ this.quantity);
    this.cartService.addToCart(this.Product.id,this.quantity);
  }


}
