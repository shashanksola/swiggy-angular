import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
    id: number;
    title: string;
    price: string;
    quantity: number;
}

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cart = new BehaviorSubject<CartItem[]>([]);
    cart$ = this.cart.asObservable();

    addToCart(item: CartItem) {
        const currentCart = [...this.cart.value];
        const itemIndex = currentCart.findIndex(cartItem => cartItem.id === item.id);

        if (itemIndex !== -1) {
            currentCart[itemIndex].quantity++;
        } else {
            currentCart.push({ ...item, quantity: 1 });
        }

        this.cart.next(currentCart);
    }

    removeFromCart(itemId: number) {
        const currentCart = [...this.cart.value];
        const itemIndex = currentCart.findIndex(cartItem => cartItem.id === itemId);

        if (itemIndex !== -1) {
            currentCart[itemIndex].quantity--;
            if (currentCart[itemIndex].quantity === 0) {
                currentCart.splice(itemIndex, 1);
            }
        }

        this.cart.next(currentCart);
    }
}
