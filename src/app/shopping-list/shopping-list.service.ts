import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  //this listens to any change in actual ingredient list and always contains the latest list. 
  //That is why to keep the updated list all the time it is called after every update or change iningredientList
  ingredientsChanged = new Subject<Ingredients[]>() 
  startedEditing = new Subject<number>()
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

  addIngredientsToShoppingList(ingredient: Ingredients[]) {
    this.ingredients.push(...ingredient) //spread operator as we want to convert array to list so that push method can handle this. or else it would push by converting array into object
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  updateIngredients(index: number, newIngredient: Ingredients) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
