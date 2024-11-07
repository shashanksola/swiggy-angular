import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
    id: number;
    title: string;
    price: string;
    quantity: number;
    src: string;
}

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cart = new BehaviorSubject<CartItem[]>(this.loadCartFromLocalStorage());
    cart$ = this.cart.asObservable();

    // Method to add item to the cart and update localStorage
    addToCart(item: CartItem) {
        const currentCart = [...this.cart.value];
        const itemIndex = currentCart.findIndex(cartItem => cartItem.id === item.id);

        if (itemIndex !== -1) {
            currentCart[itemIndex].quantity++;
        } else {
            currentCart.push({ ...item, quantity: 1 });
        }

        this.updateCartInLocalStorage(currentCart);
        this.cart.next(currentCart);
    }

    // Method to remove item from the cart and update localStorage
    removeFromCart(itemId: number) {
        const currentCart = [...this.cart.value];
        const itemIndex = currentCart.findIndex(cartItem => cartItem.id === itemId);

        if (itemIndex !== -1) {
            currentCart[itemIndex].quantity--;
            if (currentCart[itemIndex].quantity === 0) {
                currentCart.splice(itemIndex, 1);
            }
        }

        this.updateCartInLocalStorage(currentCart);
        this.cart.next(currentCart);
    }

    // Helper method to update localStorage with the latest cart state
    private updateCartInLocalStorage(cart: CartItem[]) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Helper method to load cart data from localStorage on initialization
    private loadCartFromLocalStorage(): CartItem[] {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    }
}
