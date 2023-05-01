import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cart-button',
//   templateUrl: './cart-button.component.html',
//   styleUrls: ['./cart-button.component.css']
// })
// export class CartButtonComponent {
//   cartCount: number = 0;

//   addToCart() {
//     this.cartCount++;
//   }
// }
