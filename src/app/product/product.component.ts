import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() src : string;
  @Input() name : string;
  @Input() description : string;
  @Input() price: number;
}
