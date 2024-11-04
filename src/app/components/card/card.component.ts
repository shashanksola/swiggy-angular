import { Component, Input } from '@angular/core';
import { Card } from '../../Card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() item!: Card
  @Input() category!: String
  @Input() id!: Number

}
