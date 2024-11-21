import { Component } from '@angular/core';
import {IonicModule, ModalController} from "@ionic/angular";
import {ShoppingCartComponent} from "../../shopping-cart/shopping-cart.component";

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
  standalone: true,
  imports: [ShoppingCartComponent, IonicModule]
})
export class HeadersComponent   {

  constructor(private modalController: ModalController) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: ShoppingCartComponent,
      componentProps: {
        number: 8
      },
    });
    modal.onWillDismiss().then((data) => {
      console.log('Modal dismissed with data:', data);
    });
    return await modal.present();
  }
}
