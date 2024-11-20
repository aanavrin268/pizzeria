import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonSkeletonText, IonText } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from '../shared/headers/headers.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonSkeletonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent,
      ReactiveFormsModule, HeadersComponent, CommonModule
  ],
})
export class HomePage {

  protected list_paquetes: any;


  constructor(private fBuilder: FormBuilder) {
    this.list_paquetes = [
      {title: "6 Rebanadas", text: "2x1 Chica", price: "215"},
      {title: "8 Rebanadas", text: "2x1 Mediana", price: "245"},
      {title: "12 Rebanadas", text: "2x1 Grande", price: "285"},
      {title: "16 Rebanadas", text: "2x1 Familiar", price: "330"},
      {title: "22 Cuadros", text: "2x1 Mega", price: "399"},



  ]
  }

 
}
