import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonSkeletonText, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonSkeletonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent,
      ReactiveFormsModule
  ],
})
export class HomePage {


  constructor(private fBuilder: FormBuilder) {
   
  }

 
}
