import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonSkeletonText, IonText } from '@ionic/angular/standalone';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonText, IonSkeletonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent,
    ReactiveFormsModule
],
})
export class LoginPage implements OnInit {

  protected fgLogin: FormGroup;

  constructor(private fBuilder: FormBuilder, private router: Router) {
    this.fgLogin = fBuilder.group({
      name: ["", Validators.required],
      password: ["", Validators.required]

    })
  }

  login(){
    console.log("login!")
    this.router.navigate(["/home"]);
  }

  ngOnInit() {
  }

}
