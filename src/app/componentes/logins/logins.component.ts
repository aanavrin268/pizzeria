import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonSkeletonText, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.scss'],
  standalone: true,
  imports: [IonText, IonSkeletonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent,
    ReactiveFormsModule
],
})
export class LoginsComponent  implements OnInit {

  protected fgLogin: FormGroup;

  constructor(private fBuilder: FormBuilder) {
    this.fgLogin = fBuilder.group({
      name: ["", Validators.required],
      password: ["", Validators.required]

    })
  }


  ngOnInit() {}

  login(){
    console.log("login!")
  }
 

}
