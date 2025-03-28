import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitSelectorComponent } from './fruit-selector/fruit-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FruitSelectorComponent],
  template: `
    <h2>Exemple avec &#64;Input et &#64;Output</h2>

    <app-fruit-selector 
      [fruit]="fruitDuParent" 
      (fruitAdded)="ajouterAuPanier($event)">
    </app-fruit-selector>

    <h3>Fruits dans le panier :</h3>
    <ul>
      <li *ngFor="let fruit of panier">{{ fruit }}</li>
    </ul>
  `
})
export class AppComponent {
  fruitDuParent: string = '🍌 Banane';
  panier: string[] = [];

  ajouterAuPanier(fruit: string) {
    this.panier.push(fruit);
  }
}
