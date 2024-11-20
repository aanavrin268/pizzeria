import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicModule, IonModal, ModalController} from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule
  ]
})
export class ShoppingCartComponent  {

  @ViewChild(IonModal) modal: IonModal | any;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  protected name: string = '';

  constructor(private modalController: ModalController) { }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }
  close() {
    this.modalController.dismiss();
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
