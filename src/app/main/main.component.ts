import { Component } from '@angular/core';
import { products } from "../products";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  products = products;

}
