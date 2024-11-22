import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject = new BehaviorSubject<any[]>([]);

  cart$ = this.cartSubject.asObservable();

  constructor() { }

  addProduct(product: any){
    const currentCart = this.cartSubject.value;
    const updatedCart = [...currentCart, product];

    this.cartSubject.next(updatedCart);
  }

  getCart(){
    return this.cartSubject.value;
  }

  clearCart(){
    this.cartSubject.next([]);
  }
}
