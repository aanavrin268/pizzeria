import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeadersComponent } from "../shared/headers/headers.component";
import { IonicModule } from "@ionic/angular";
import {CommonModule, NgForOf} from "@angular/common";  // Asegúrate de importar IonicModule solo una vez
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HeadersComponent,
    IonicModule,
    NgForOf, CommonModule
  ],
})
export class HomePage {

  protected list_paquetes: any;
  protected list_top: any;
  protected showNoti: boolean = false;

  public form = this.fBuilder.group({
    paquete: ['', Validators.required],
  });

  constructor(private fBuilder: FormBuilder, private router: Router) {
    this.list_paquetes = [
      {title: "Paquete 1", text: "2x1 Chica", price: "215", image: "assets/paquete1.png"},
      {title: "8 Rebanadas", text: "2x1 Mediana", price: "245"},
      {title: "12 Rebanadas", text: "2x1 Grande", price: "285"},
      {title: "16 Rebanadas", text: "2x1 Familiar", price: "330"},
      {title: "22 Cuadros", text: "2x1 Mega", price: "399"},



  ]

  this.list_top = [
    {title: "Hamburguesa", img: "assets/burguer.png"}, {title: "Pizza", img: "assets/pizza.png"}, {title: "Spaguetti",  img: "assets/espa.png"}
    , {title: "Spaguetti",  img: "assets/espa.png"} , {title: "Spaguetti",  img: "assets/espa.png"}
  ]
  }



  goToProduct(product: any){
    this.router.navigate(["/product"]);

  }


  addPaquete(paquete: any){
      this.showNoti = !this.showNoti;

      setTimeout(() => {
        this.showNoti = !this.showNoti;

      }, 2000);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Formulario enviado:", this.form.value);
    } else {
      console.log("Formulario no válido");
    }
  }
}
