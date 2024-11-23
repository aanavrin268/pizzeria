import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

interface Size {
  id: number;
  name: string;
  diameter: number;
  slices: number;
  priceMultiplier: number;
}

interface Ingredient {
  id: number;
  name: string;
  calories: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule // Esta ya incluye IonHeader, IonToolbar, etc.
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductPage implements OnInit {
  @ViewChild('slides') slides: any;

  // Product Details
  productName: string = 'Pizza Pepperoni Especial';
  productImages: string[] = [
    'assets/pizza.png',
    'assets/espa.png',
    'assets/espa.png'
  ];
  
  // Pricing
  basePrice: number = 285.00;
  originalPrice: number = 356.25;
  currentPrice: number = 285.00;
  discount: number = 20;
  
  // Quick Info
  deliveryTime: string = '25-30 min';
  calories: number = 285;
  rating: number = 4.8;
  reviewCount: number = 128;
  ratingStars: ('full' | 'half' | 'empty')[] = ['full', 'full', 'full', 'full', 'half'];

  // Favorites
  isFavorite: boolean = false;
  
  // Quantity
  quantity: number = 1;
  
  // Sizes
  sizes: Size[] = [
    { id: 1, name: 'Chica', diameter: 25, slices: 6, priceMultiplier: 1 },
    { id: 2, name: 'Mediana', diameter: 30, slices: 8, priceMultiplier: 1.3 },
    { id: 3, name: 'Grande', diameter: 35, slices: 10, priceMultiplier: 1.6 }
  ];
  selectedSize: Size = this.sizes[0];

  // Ingredients
  ingredients: Ingredient[] = [
    { id: 1, name: 'Pepperoni', calories: 85 },
    { id: 2, name: 'Queso Mozzarella', calories: 95 },
    { id: 3, name: 'Salsa de Tomate', calories: 35 },
    { id: 4, name: 'Orégano', calories: 5 }
  ];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true
  };

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.updatePrice();
  }

  // Favorite Toggle
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.presentToast(
      this.isFavorite 
        ? 'Agregado a favoritos' 
        : 'Eliminado de favoritos'
    );
  }

  // Size Selection
  selectSize(size: Size) {
    this.selectedSize = size;
    this.updatePrice();
  }

  // Quantity Controls
  increaseQuantity() {
    if (this.quantity < 10) {
      this.quantity++;
      this.updatePrice();
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updatePrice();
    }
  }

  // Price Calculations
  updatePrice() {
    this.currentPrice = this.basePrice * this.selectedSize.priceMultiplier;
    this.originalPrice = this.currentPrice / (1 - this.discount / 100);
  }

  getTotalPrice(): number {
    return this.currentPrice * this.quantity;
  }

  // Cart Management
  async addToCart() {
    // Aquí iría la lógica para agregar al carrito
    const toast = await this.toastController.create({
      message: 'Producto agregado al carrito',
      duration: 2000,
      position: 'bottom',
      color: 'success',
      buttons: [
        {
          text: 'Ver Carrito',
          role: 'cancel',
          handler: () => {
            this.router.navigate(['/cart']);
          }
        }
      ]
    });
    toast.present();
  }

  // Ingredients Info
  async showIngredientsInfo() {
    const totalCalories = this.ingredients.reduce((acc, curr) => acc + curr.calories, 0);
    const toast = await this.toastController.create({
      message: `Calorías totales: ${totalCalories} kcal`,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  // Toast Helper
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}