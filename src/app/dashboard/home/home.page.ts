import {Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule, NgForOf } from '@angular/common';
import { HeadersComponent } from '../shared/headers/headers.component';
import { FooterComponent } from '../footer/footer.component';
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
    NgForOf,
    CommonModule,
  ],schemas: [CUSTOM_ELEMENTS_SCHEMA], })
export class HomePage implements OnInit {

  protected list_paquetes: any;
  protected list_top: any;
  protected showNoti: boolean = false;
  protected showOverlay: boolean = false;
  protected showImage: boolean = true;
  protected list_cart:any[] = [];
  selectedId: number | null = null;

  public form = this.fBuilder.group({
    paquete: ['', Validators.required],
  });
  protected   slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1.5,
    centeredSlides: true,
    freeMode: true,
    loop: true,
    grabCursor: true
  };

  constructor(private fBuilder: FormBuilder, private router: Router,
    private cartService: CartService
  ) {
    this.list_paquetes = [
      {id: 1, title: "6 Rebanadas", text: "2x1 Chica", price: "215", image: "assets/paquete1.png", showInfo: false },
      {id:2, title: "8 Rebanadas", text: "2x1 Mediana", price: "245",  image: "assets/paquete2.png", showInfo: false },
      {id:3, title: "12 Rebanadas", text: "2x1 Grande", price: "285", image: "assets/paquete1.png", showInfo: false },
      {id:4, title: "16 Rebanadas", text: "2x1 Familiar", price: "330", image: "assets/paquete2.png", showInfo: false },
      {id:5, title: "22 Cuadros", text: "2x1 Mega", price: "399", image: "assets/paquete5.png", showInfo: false },
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
  toggleInfo(index: number): void {
    this.list_paquetes[index].showInfo = !this.list_paquetes[index].showInfo;
  }

  goInventary(){
    this.router.navigate(['/inventario']);
  }


  addNewItem(produc:any){
    this.list_cart.push(produc);
  }



  goToProduct(product: any){
    this.router.navigate(["/product"],
      {state: { product} }
    );
  }
  addPaquete(paquete: any){
      this.showOverlay = !this.showOverlay;
      this.selectedId = paquete.id;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Formulario enviado:", this.form.value);
    } else {
      console.log("Formulario no válido");
    }
  }
  @HostListener('document:click', ['$event'])
  closeDetails(event: MouseEvent) {
    this.list_paquetes.forEach((item:any, index:any) => {
      const cardElement = document.querySelectorAll('.custom-card')[index];
      if (cardElement && !cardElement.contains(event.target as Node)) {
        item.showInfo = false;
      }
    });
  }
}
