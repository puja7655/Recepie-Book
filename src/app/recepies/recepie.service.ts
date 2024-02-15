import { Injectable} from '@angular/core';
import { recepie } from './recepie.model';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {
  private recepies: recepie[] = [new recepie(
  'test recepie1', 'description1', 
  'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4551832%2Fpexels-photo-4551832.jpeg',
  [
    (new Ingredients('Meat',1)),
    (new Ingredients('Bread',5))
  ]
),
  new recepie('test recepie2', 'description2',
  'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4551832%2Fpexels-photo-4551832.jpeg',
  [
    (new Ingredients('chicken',1)),
    (new Ingredients('potato',5))
  ]
), 
new recepie('test recepie3', 'description3', 
'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F4551832%2Fpexels-photo-4551832.jpeg',
  [
    (new Ingredients('milk',1)),
    (new Ingredients('Bread',5))
  ]
)]

  constructor() { }
  getRecepie() {
    return this.recepies.slice();
  }

  getRecepieByIndex(index:number){
    //Doing a shallow copy of recipes list here with the help of slice
    return this.recepies.slice()[index]
  }
}
