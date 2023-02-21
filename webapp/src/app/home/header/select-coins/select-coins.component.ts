import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-coins',
  templateUrl: './select-coins.component.html',
  styleUrls: ['./select-coins.component.scss']
})
export class SelectCoinsComponent {

  // Erro no console pode ser indicativo o porque não está funcionando o matselect. Pode faltar importações.
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
