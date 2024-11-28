import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonIcon, IonLabel, IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {HomePage} from "../home/home.page";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, HomePage, IonTab]
})
export class TabsPage implements OnInit {

  constructor( ) {
  }

  ngOnInit(): void {

  }


}
