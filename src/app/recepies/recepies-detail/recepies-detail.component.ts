import { Component, OnInit, Input } from '@angular/core';
import { recepie } from '../recepie.model';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recepies-detail',
  templateUrl: './recepies-detail.component.html',
  styleUrl: './recepies-detail.component.css'
})
export class RecepiesDetailComponent implements OnInit {
  @Input() recepieReceivedFromParentList: recepie
  constructor(private shoppingListService:ShoppingListService) { }
  ngOnInit(): void {

  }
  onAddToShoppingList(){
    // const ingName = this.recepieReceivedFromParentList.ingredient[0].name;
    //  const ingAmount = this.recepieReceivedFromParentList.ingredient[1].amount;;
    //  const newIngredient = new Ingredients(ingName, ingAmount)
    //  this.shoppingListService.addItem(newIngredient)
    this.shoppingListService.AddIngredientsToShoppingList(this.recepieReceivedFromParentList.ingredient)
  }
}
