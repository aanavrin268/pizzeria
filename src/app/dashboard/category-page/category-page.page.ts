import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.page.html',
  styleUrls: ['./category-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CategoryPagePage implements OnInit {

  protected category: any;

  protected retriviedList: any[] = [];

  constructor(private activate: ActivatedRoute) { 

    this.retriviedList = [
      {id: 1, name: "Jitomate", stock: 10}, {id: 1, name: "Cebolla", stock: 10},
      {id: 1, name: "Jalapeño", stock: 10}


    ];

  }

  ngOnInit() {

    this.category = history.state;

    console.log("reci", this.category);

  }

}
