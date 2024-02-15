import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredients[]>()
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Oranges', 6)
  ]
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addItem(ingredient: Ingredients) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  AddIngredientsToShoppingList(ingredient: Ingredients[]) {
    this.ingredients.push(...ingredient) //spread operator as we want to convert array to list so that push method can handle this. or else it would push by converting array into object
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
