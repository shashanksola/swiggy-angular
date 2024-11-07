import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CartItem } from '../../services/cart.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { DecimalPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent, NgFor, NgIf, RouterModule, DecimalPipe],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: CartItem[] = [];
  emptyCart: boolean = true;
  orderMessage: string | null = null; // Message to show after placing order

  readonly TAX_RATE = 0.18;
  readonly DELIVERY_FEE = 30;
  readonly PLATFORM_FEE = 6;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    const local = localStorage.getItem('cart');
    if (local) {
      this.items = JSON.parse(local);
      this.emptyCart = this.items.length === 0;
    }
  }

  incrementQuantity(index: number): void {
    this.items[index].quantity += 1;
    this.updateCartInLocalStorage();
  }

  decrementQuantity(index: number): void {
    if (this.items[index].quantity > 1) {
      this.items[index].quantity -= 1;
    } else {
      this.items.splice(index, 1);
    }
    this.updateCartInLocalStorage();
    this.emptyCart = this.items.length === 0;
  }

  calculateItemTotal(item: CartItem): number {
    return parseFloat(item.price.substring(1)) * item.quantity;
  }

  calculateSubtotal(): number {
    return this.items.reduce((total, item) => total + this.calculateItemTotal(item), 0);
  }

  calculateTax(): number {
    return this.calculateSubtotal() * this.TAX_RATE;
  }

  calculateTotalPrice(): number {
    return this.calculateSubtotal() + this.calculateTax() + this.DELIVERY_FEE + this.PLATFORM_FEE;
  }

  placeOrder(): void {
    this.clearCart();
    alert("Your order has been placed!");
    this._router.navigateByUrl('/');
  }

  emptyCartAction(): void {
    this.clearCart();
  }

  private clearCart(): void {
    this.items = [];
    this.emptyCart = true;
    localStorage.removeItem('cart');
    this.orderMessage = null; // Reset message when cart is cleared
  }

  private updateCartInLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  onSignOut() {
    localStorage.removeItem('user');
    this._router.navigateByUrl('/');
  }
}
