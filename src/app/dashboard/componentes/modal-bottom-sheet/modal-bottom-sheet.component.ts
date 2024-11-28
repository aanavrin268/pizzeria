import { Component, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-bottom-sheet',
  templateUrl: './modal-bottom-sheet.component.html',
  imports:[
    IonicModule
  ],
  styleUrls: ['./modal-bottom-sheet.component.scss'],
  standalone: true,
})
export class ModalBottomSheetComponent  implements OnInit {

  constructor(private controller: ModalController) { }

  ngOnInit() {}


  dismiss(){
    this.controller.dismiss();
  }

}
