import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];
  constructor(private shoppingListService: ShoppingListService) {

  }
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients(); // this is important to show the existing shopping List
    this.shoppingListService.ingredientsChanged
    .subscribe((ingredient:Ingredients[])=>{
      this.ingredients=ingredient
    })
  }
}
