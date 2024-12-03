import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-order-summary',
  imports: [
    CurrencyPipe,
    MatFormField,
    MatLabel
  ],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
  cartService = inject(CartService);
}
