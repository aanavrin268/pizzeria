import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    ReactiveFormsModule,
    CommonModule
],
})
export class LoginPage implements OnInit {

  protected fgLogin: FormGroup;
  public loading: boolean = false;

  constructor(private fBuilder: FormBuilder, private router: Router) {
    this.fgLogin = fBuilder.group({
      name: ["", Validators.required],
      password: ["", Validators.required]

    })
  }

  login() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      // Tu lógica de login aquí
      this.router.navigate(["/home"]);
    }, 2000);

  }



  ngOnInit() {
  }

}
