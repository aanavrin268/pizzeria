import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalBottomSheetComponent } from '../componentes/modal-bottom-sheet/modal-bottom-sheet.component';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule



@Component({
  selector: 'app-invetario',
  templateUrl: './invetario.page.html',
  styleUrls: ['./invetario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule
  ]
})
export class InvetarioPage implements OnInit {
  @ViewChild("inputSearch") inputSearch!: ElementRef;

  protected list_cat: any[] = [];
  protected allCategories: any[] = [];

  constructor(private router: Router, private modalController: ModalController) {
    this.allCategories = [
      {name:"Verduras", img:"assets/verduras.png"}, {name:"Carnes", img:"assets/carne.png"},  {name:"Bebidas", img:"assets/refresco.png"},
      {name:"Salsas", img:"assets/salsas.png"},    {name:"Masas", img:"assets/salsas.png"},   {name:"Materia prima", img:"assets/salsas.png"},
    ]

  }

  ngOnInit() {
    this.list_cat = [...this.allCategories];

  }

  async goToCategory(category: any){
    const modal = await this.modalController.create({
      component: ModalBottomSheetComponent,
      cssClass: 'modal-bottom-sheet',


    });


    return await modal.present();


    /*
    this.router.navigate(['/category'], {
      state: category
    });

    */

  }



  filter(){

  const value =  this.inputSearch.nativeElement.value.toLowerCase();


    this.list_cat = this.allCategories.filter(cat => cat.name.toLowerCase()
    .includes(value));
  }

}
