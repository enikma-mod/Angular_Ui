import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
changeImage(imageUrl: string) {
  const img = document.getElementById('img-card') as HTMLImageElement;
  img.src = imageUrl;
}

  constructor() { }

  ngOnInit() {
  }

}
