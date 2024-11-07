import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  imports: [NavbarComponent, NgFor, NgIf, RouterModule],
  standalone: true
})
export class FavoritesComponent implements OnInit {
  favoriteDishes: any[] = [];  // Array to store favorite dishes

  ngOnInit(): void {
    const storedFavorites = localStorage.getItem('favoriteDishes');
    if (storedFavorites) {
      this.favoriteDishes = JSON.parse(storedFavorites);
    }
  }

  removeFavorite(dishId: number) {
    // Remove dish from favoriteDishes array
    this.favoriteDishes = this.favoriteDishes.filter(dish => dish.id !== dishId);

    // Update localStorage
    localStorage.setItem('favoriteDishes', JSON.stringify(this.favoriteDishes));
  }
}
