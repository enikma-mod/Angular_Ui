import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../Interface/product';

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
  products: Product[] = [];
  isLoading: boolean = true;
  //keep track of the current image being displayed.
  //card image changes on hover.
  private currentImageIndex = 0;

  

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();

    // Simulate data loading
    setTimeout(() => {
      this.isLoading = false; // Set isLoading to false once the data is loaded
    }, 2000);
     
  }

  getProducts(): void {
    this.productService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }


  changeImage(newImage: string) {
    const img = document.getElementById('img-card') as HTMLImageElement;
    this.currentImageIndex = (this.currentImageIndex + 1) % newImage.length;
    img.src = newImage[this.currentImageIndex];
  }

}
