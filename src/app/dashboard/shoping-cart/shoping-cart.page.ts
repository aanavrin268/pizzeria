import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.page.html',
  styleUrls: ['./shoping-cart.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ShopingCartPage implements OnInit {
  protected list_cart: any[] = [
    {image:"assets/burguer1.png", price: 55, name: "Hamburguesa", cuantity:1, sub: 55},
    {image:"assets/espa1.png", price: 105, name: "Espaghetti", cuantity:1, sub: 105},

  ];

  protected subTotal: number = 0;

  constructor(private cartService: CartService) {

    


   }

  ngOnInit() {

    this.subTotal = this.list_cart.reduce((total, prodcuto) => total + prodcuto.sub, 0);

    /*
    this.cartService.cart$.subscribe(cart => {
      this.list_cart = cart;
    })
*/

    //console.log("cart actual ",this.cartService.getCart());
  }


  addItem(product: any){
    let count = product.cuantity;
    //const currentPrice = product.price;

    count ++;

    const currentIndex = this.list_cart.findIndex(producto => producto.name === product.name);

    this.list_cart[currentIndex].cuantity = count;
    this.list_cart[currentIndex].sub = count * this.list_cart[currentIndex].price;

    const currentProdut = this.list_cart.find(producto => producto.name === product.name);
    console.log("aa", this.list_cart);


    this.subTotal = this.list_cart.reduce((total, prodcuto) => total + prodcuto.sub, 0);


  }


  removeItem(product:any){
    let count = product.cuantity;

    count --;

    if(count === 0){
        return;
    }else {
      const currentIndex = this.list_cart.findIndex(producto => producto.name === product.name);
      this.list_cart[currentIndex].cuantity = count;

      this.list_cart[currentIndex].sub = this.list_cart[currentIndex].sub -  this.list_cart[currentIndex].price;

      this.subTotal = this.list_cart.reduce((total, prodcuto) => total + prodcuto.sub, 0);


    }

    


  }

}
