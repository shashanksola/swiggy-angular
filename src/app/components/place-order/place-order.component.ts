import { Component } from '@angular/core';
import { Dish } from './Dish';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [NgFor],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {
  dishes: Dish[] = [
    { src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png", title: "Dosa", price: "₹60", description: "Crispy rice crepe with chutney." },
    { src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png", title: "Idli", price: "₹50", description: "Soft steamed rice cakes." },
    { src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poori.png", title: "Poori", price: "₹55", description: "Fluffy fried bread with curry." },
    { src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada.png", title: "Vada", price: "₹45", description: "Savory lentil donut." },
    { src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png", title: "Paratha", price: "₹70", description: "Layered wheat flatbread with butter." },
    { src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png", title: "Biryani", price: "₹120", description: "Aromatic spiced rice with meat." },
    { src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png", title: "Khichdi", price: "₹65", description: "Comforting rice and lentil mix." },
    { src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chole%20Bhature.png", title: "Chole Bhature", price: "₹80", description: "Spicy chickpeas with fried bread." },
    { src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png", title: "Cake", price: "₹90", description: "Soft and moist dessert slice." },
    { src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Omelette.png", title: "Omelette", price: "₹40", description: "Fluffy eggs with spices." }
  ];

}
