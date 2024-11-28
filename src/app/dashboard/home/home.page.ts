import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeadersComponent } from "../shared/headers/headers.component";
import { IonicModule } from "@ionic/angular";
import {NgForOf} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";  // Asegúrate de importar IonicModule solo una vez
import {CommonModule} from "@angular/common";  // Asegúrate de importar IonicModule solo una vez
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HeadersComponent,
    FooterComponent,
    IonicModule,
    NgForOf, CommonModule
  ],
})
export class HomePage implements OnInit {

  protected list_paquetes: any;
  protected list_top: any;
  protected showNoti: boolean = false;
  protected showOverlay: boolean = false;


  protected list_cart:any[] = [];

  selectedId: number | null = null;

  public form = this.fBuilder.group({
    paquete: ['', Validators.required],
  });

  constructor(private fBuilder: FormBuilder, private router: Router, 
    private cartService: CartService
  ) {
    this.list_paquetes = [
      {id: 1, title: "Paquete 1", text: "2x1 Chica", price: "215", image: "assets/paquete1.png"},
      {id:2, title: "8 Rebanadas", text: "2x1 Mediana", price: "245",  image: "assets/paquete2.png"},
      {id:3, title: "12 Rebanadas", text: "2x1 Grande", price: "285", image: "assets/paquete1.png"},
      {id:4, title: "16 Rebanadas", text: "2x1 Familiar", price: "330", image: "assets/paquete2.png"},
      {id:5, title: "22 Cuadros", text: "2x1 Mega", price: "399", image: "assets/paquete5.png"},



  ]

  this.list_top = [
    {title: "Hamburguesa", img: "assets/burguer1.png"}, {title: "Pizza", img: "assets/pizza3.png"}, {title: "Spaguetti",  img: "assets/espa1.png"}
    , {title: "Spaguetti",  img: "assets/espa1.png"} , {title: "Spaguetti",  img: "assets/espa1.png"}
  ]
  }


  ngOnInit(): void {

      this.cartService.cart$.subscribe(cart => {
        this.list_cart = cart;
      })
  }


  goInventary(){
    this.router.navigate(['/inventario']);
  }


  addNewItem(produc:any){
    this.list_cart.push(produc);
    //this.cartService.addProduct(produc);
    //console.log(this.list_cart);
  }



  goToProduct(product: any){
    this.router.navigate(["/product"], 
      {state: { product} }
    );

  }


  addPaquete(paquete: any){

      this.showOverlay = !this.showOverlay;
      this.selectedId = paquete.id;

     // this.showNoti = !this.showNoti;

     /*
      setTimeout(() => {
        this.showNoti = !this.showNoti;

      }, 2000);

      */
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Formulario enviado:", this.form.value);
    } else {
      console.log("Formulario no válido");
    }
  }
}
