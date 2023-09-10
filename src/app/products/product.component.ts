import { Component } from '@angular/core';
import { YesNoPipe } from '../shared/pipes/yes-no.pipe';
import { NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
  standalone: true,
  imports: [NgIf, YesNoPipe, RouterLink, RouterOutlet]
})
export class ProductComponent { }
