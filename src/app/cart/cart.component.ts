import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent {

}
