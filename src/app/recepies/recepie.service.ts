import { Injectable } from '@angular/core';
import { recepie } from './recepie.model';
import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {
  recepieChanged = new Subject<recepie[]>()
  // commenting the hardcoded recepie since now firebase database is set up for backend
  // private recepies: recepie[] = [new recepie(
  //   'test recepie1', 'description1',
  //   'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4551832%2Fpexels-photo-4551832.jpeg',
  //   [
  //     (new Ingredients('Meat', 1)),
  //     (new Ingredients('Bread', 5))
  //   ]
  // ),
  // new recepie('test recepie2', 'description2',
  //   'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4551832%2Fpexels-photo-4551832.jpeg',
  //   [
  //     (new Ingredients('chicken', 1)),
  //     (new Ingredients('potato', 5))
  //   ]
  // ),
  // new recepie('test recepie3', 'description3',
  //   'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4551832%2Fpexels-photo-4551832.jpeg',
  //   [
  //     (new Ingredients('milk', 1)),
  //     (new Ingredients('Bread', 5))
  //   ]
  // )]

  private recepies: recepie[] = []

  constructor() { }
  getRecepie() {
    return this.recepies.slice();
  }

  getRecepieByIndex(index: number) {
    //Doing a shallow copy of recipes list here with the help of slice
    return this.recepies.slice()[index]
  }

  updateRecepie(index: number, newRecepie: recepie) {
    this.recepies[index] = newRecepie
    this.recepieChanged.next(this.recepies.slice())
  }

  addRecepie(newRecepie: recepie) {
    this.recepies.push(newRecepie)
    this.recepieChanged.next(this.recepies.slice())
  }

  deleteRecepie(index: number) {
    this.recepies.splice(index, 1)
    this.recepieChanged.next(this.recepies.slice())
  }

  //this method is to set the recepi fetched from backend(firefox backend is set for the project)
  setRecepie(recepie: recepie[]) {
    this.recepies = recepie
    this.recepieChanged.next(this.recepies.slice())
  }

  deleteIngredient(recepieIndex: number, ingIndex: number) {
    this.recepies[recepieIndex].ingredient.splice(ingIndex, 1)
    this.recepieChanged.next(this.recepies.slice())

  }
}
