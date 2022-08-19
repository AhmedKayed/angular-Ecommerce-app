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

}
