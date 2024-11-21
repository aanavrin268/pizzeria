import {Component, Input, OnInit, ViewChild} from '@angular/core';
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
  @Input() number: any;
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
      this.number = `Hello, ${ev.detail.data}!`;
    }
  }
}
