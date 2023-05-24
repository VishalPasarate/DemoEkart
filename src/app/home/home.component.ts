import { Component, OnInit } from '@angular/core';
import { cart, product } from '../data-type';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
 popularProducts:undefined|product[];
 trendyProducts:undefined | product[];
  productData: any;
  productQuantity: any;
  http: any;
  cartItemsCount: any;
  cartItems: any;

  
  constructor(private product:ProductService) {}

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      this.popularProducts=data;
    })

    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
    })
  }

  // addtocart(items: any){
  //   this.cart.addtoCart(items);
  //   this.cartItems= items.length;
    
  // }
  

}
