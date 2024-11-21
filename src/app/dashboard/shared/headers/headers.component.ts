import {Component} from '@angular/core';
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
export class HeadersComponent   {

  constructor(private router: Router) { }

  showcart(){
    this.router.navigate(["/shoping"]);
  }
}
