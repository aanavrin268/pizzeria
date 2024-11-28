import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invetario',
  templateUrl: './invetario.page.html',
  styleUrls: ['./invetario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
      CommonModule
  ]
})
export class InvetarioPage implements OnInit {
  @ViewChild("inputSearch") inputSearch!: ElementRef;

  protected list_cat: any[] = [];
  protected allCategories: any[] = [];

  constructor(private router: Router) {
    this.allCategories = [
      {name:"Verduras", img:"assets/verduras.png"}, {name:"Carnes", img:"assets/carne.png"},  {name:"Bebidas", img:"assets/refresco.png"},
      {name:"Salsas", img:"assets/salsas.png"},    {name:"Masas", img:"assets/salsas.png"},   {name:"Materia prima", img:"assets/salsas.png"},
    ]

  }

  ngOnInit() {
    this.list_cat = [...this.allCategories];

  }

  goToCategory(category: any){
    this.router.navigate(['/category'], {
      state: category
    });

  }



  filter(){

  const value =  this.inputSearch.nativeElement.value.toLowerCase();


    this.list_cat = this.allCategories.filter(cat => cat.name.toLowerCase()
    .includes(value));
  }

}
