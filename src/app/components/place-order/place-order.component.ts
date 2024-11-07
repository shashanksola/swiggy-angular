import { Dish } from './Dish';
import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  imports: [NgFor, NgIf, RouterModule, NavbarComponent],
  standalone: true
})

export class PlaceOrderComponent implements OnInit {

  signinStaus: boolean = false;

  dishes: Dish[] = [
    { quantity: 0, id: 1, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png", title: "Dosa", price: "₹60", description: "Crispy rice crepe with chutney." },
    { quantity: 0, id: 2, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png", title: "Idli", price: "₹50", description: "Soft steamed rice cakes." },
    { quantity: 0, id: 3, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poori.png", title: "Poori", price: "₹55", description: "Fluffy fried bread with curry." },
    { quantity: 0, id: 4, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada.png", title: "Vada", price: "₹45", description: "Savory lentil donut." },
    { quantity: 0, id: 5, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png", title: "Paratha", price: "₹70", description: "Layered wheat flatbread with butter." },
    { quantity: 0, id: 6, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png", title: "Biryani", price: "₹120", description: "Aromatic spiced rice with meat." },
    { quantity: 0, id: 7, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png", title: "Khichdi", price: "₹65", description: "Comforting rice and lentil mix." },
    { quantity: 0, id: 8, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chole%20Bhature.png", title: "Chole Bhature", price: "₹80", description: "Spicy chickpeas with fried bread." },
    { quantity: 0, id: 9, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png", title: "Cake", price: "₹90", description: "Soft and moist dessert slice." },
    { quantity: 0, id: 10, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Omelette.png", title: "Omelette", price: "₹40", description: "Fluffy eggs with spices." }
  ];

  recomendedDishes: Dish[] = [
    { quantity: 0, id: 11, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pancake.png", title: "Pancake", price: "₹80", description: "Fluffy pancakes with syrup." },
    { quantity: 0, id: 12, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Parotta.png", title: "Parotta", price: "₹60", description: "Layered flaky flatbread." },
    { quantity: 0, id: 13, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poha-1.png", title: "Poha", price: "₹40", description: "Flattened rice with spices." },
    { quantity: 0, id: 14, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Uthappam.png", title: "Uthappam", price: "₹50", description: "Thick rice pancake with toppings." },
    { quantity: 0, id: 15, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Upma.png", title: "Upma", price: "₹45", description: "Savory semolina porridge." },
    { quantity: 0, id: 16, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png", title: "Salad", price: "₹70", description: "Fresh mixed vegetable salad." },
    { quantity: 0, id: 17, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Coffee.png", title: "Coffee", price: "₹30", description: "Freshly brewed coffee." },
    { quantity: 0, id: 18, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shake.png", title: "Shake", price: "₹60", description: "Chilled milkshake with flavors." },
    { quantity: 0, id: 19, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Tea.png", title: "Tea", price: "₹20", description: "Hot brewed tea." },
    { quantity: 0, id: 20, src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png", title: "Burger", price: "₹100", description: "Juicy burger with fillings." }
  ];

  constructor(private cartService: CartService, private _router: Router) { }

  ngOnInit(): void {
    let sigin: boolean = false;

    if (localStorage['cart'] === '[]' || localStorage['cart'] === undefined) {
      sigin = false;
    } else {
      sigin = true;
    }

    this.signinStaus = sigin;
  }

  addItem(dish: Dish) {
    dish.quantity++;
    this.cartService.addToCart(dish);
  }

  removeItem(dish: Dish) {
    if (dish.quantity > 0) {
      dish.quantity--;
      this.cartService.removeFromCart(dish.id);
    }
  }
}
