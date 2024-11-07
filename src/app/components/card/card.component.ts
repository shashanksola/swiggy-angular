import { Component, Input } from '@angular/core';
import { Card } from '../../Card';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() item!: Card
  @Input() category!: String
  @Input() id!: Number


}