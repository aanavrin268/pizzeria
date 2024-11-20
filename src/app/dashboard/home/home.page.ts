import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeadersComponent } from "../shared/headers/headers.component";
import { IonicModule } from "@ionic/angular";
import {NgForOf} from "@angular/common";  // Asegúrate de importar IonicModule solo una vez

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HeadersComponent,
    IonicModule,
    NgForOf,
  ],
})
export class HomePage {

  protected list_paquetes: any;

  public form = this.fBuilder.group({
    paquete: ['', Validators.required],
  });

  constructor(private fBuilder: FormBuilder) {
    this.list_paquetes = [
      {title: "6 Rebanadas", text: "2x1 Chica", price: "215"},
      {title: "8 Rebanadas", text: "2x1 Mediana", price: "245"},
      {title: "12 Rebanadas", text: "2x1 Grande", price: "285"},
      {title: "16 Rebanadas", text: "2x1 Familiar", price: "330"},
      {title: "22 Cuadros", text: "2x1 Mega", price: "399"},



  ]
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Formulario enviado:", this.form.value);
    } else {
      console.log("Formulario no válido");
    }
  }
}
