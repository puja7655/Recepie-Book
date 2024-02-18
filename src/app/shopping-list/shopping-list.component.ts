import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  ingChangedSubject: Subscription
  constructor(private shoppingListService: ShoppingListService) {

  }
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients(); // this is important to show the existing shopping List
    this.ingChangedSubject = this.shoppingListService.ingredientsChanged
      .subscribe((ingredient: Ingredients[]) => {
        this.ingredients = ingredient
      })
  }
  onEditClick(index: number) {
    this.shoppingListService.startedEditing.next(index)
  }
  ngOnDestroy(): void {
    this.ingChangedSubject.unsubscribe()
  }
}
