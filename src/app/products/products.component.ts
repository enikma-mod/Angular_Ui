import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  // changeImage(imageUrl: string) {
  // const img = document.getElementById('img-card') as HTMLImageElement;
  // img.src = imageUrl;
  // }

  //keep track of the current image being displayed.
  private currentImageIndex = 0;

  changeImage(imageUrls: string[]) {
    const img = document.getElementById('img-card') as HTMLImageElement;
    this.currentImageIndex = (this.currentImageIndex + 1) % imageUrls.length;
    img.src = imageUrls[this.currentImageIndex];
  }

  constructor() { }

  ngOnInit() {
  }

}
