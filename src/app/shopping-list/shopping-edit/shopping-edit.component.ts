import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('nameInput') nameInputRef!: ElementRef
  @ViewChild('amountInput') amountInputRef!: ElementRef
  @ViewChild('f') slForm: NgForm
  editMode = false;
  itemIndexSubscription: Subscription
  editedIndexItem: number
  editItem: Ingredients

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.itemIndexSubscription = this.shoppingListService.startedEditing
      .subscribe((index: number) => {
        this.editMode = true;
        this.editedIndexItem = index;
        this.editItem = this.getIngredient(this.editedIndexItem)
        this.slForm.setValue({
          'name': this.editItem.name,
          'amount': this.editItem.amount
        })
      })
  }

  getIngredient(index: number) {
    return this.shoppingListService.ingredients[index];
  }

  onSubmit(f: NgForm) {
    const value = f.value;
    const ingName = value.name;
    const ingAmount = value.amount;
    const newIngredient = new Ingredients(ingName, ingAmount)
    if (this.editItem) {
      this.shoppingListService.updateIngredients(this.editedIndexItem, newIngredient)
    } else {
      this.shoppingListService.addItem(newIngredient)
    }
    this.onReset()
  }

  onReset(){
    this.editMode=false;
    this.slForm.reset()
  }

  onDelete(){
  this.onReset();
  this.shoppingListService.deleteIngredient(this.editedIndexItem)

  }

  ngOnDestroy() {
    this.itemIndexSubscription.unsubscribe();
  }
}
