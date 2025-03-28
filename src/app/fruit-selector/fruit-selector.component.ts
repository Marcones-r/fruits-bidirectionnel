import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fruit-selector',
  standalone: true,
  template: `
    <p>Fruit proposé par le parent : <strong>{{ fruit }}</strong></p>
    <button (click)="ajouterAuPanier()">Ajouter au panier</button>
  `
})
export class FruitSelectorComponent {
  @Input() fruit: string = '🍎 Pomme';

  @Output() fruitAdded = new EventEmitter<string>();

  ajouterAuPanier() {
    this.fruitAdded.emit(this.fruit);
  }
}
