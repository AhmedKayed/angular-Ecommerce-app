import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent implements OnInit {
  name:string ="";
  address:string="";
  cardNumber:number|undefined=undefined;
  cvv:number|undefined=undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    this.router.navigateByUrl('/confirmation');
  }

  nameChanged(name: string):void{
    this.name=name;
  }

  
  addressChanged(address: string):void{
    this.address=address;
  }

  cardNumberChanged(cardNumber: number):void{
    this.cardNumber=cardNumber;
  }

  
  cvvChanged(cvv: number):void{
    this.cvv=cvv;
  }


}
