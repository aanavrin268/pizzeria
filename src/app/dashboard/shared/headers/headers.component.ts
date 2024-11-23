import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, NgClass, RouterLink]
})
export class HeadersComponent implements OnInit   {
  @Input() cart: any[] = [];



  constructor(private router: Router) {

    
   }


  ngOnInit(): void {
      console.log("en header", this.cart);
  }

  showcart(){
    this.router.navigate(["/shoping"], {
      state: {cart: this.cart}
    });
  }
}
