//Fetch data from backend (for this project i have set firefox backend)
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { recepie } from '../recepies/recepie.model';
import { RecepieService } from '../recepies/recepie.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
    private recepieService: RecepieService) { }

  storeRecepie() {
    const recepies = this.recepieService.getRecepie();
    this.http.put('https://ng-recepie-book-b3b71-default-rtdb.firebaseio.com/recepies.json', recepies)
      .subscribe(response => {
        console.log(response)
      })
  }

  fetchRecepie() {
    this.http.get<recepie[]>('https://ng-recepie-book-b3b71-default-rtdb.firebaseio.com/recepies.json')
      .pipe(
        map(recepies => {
          return recepies.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredient ? recipe.ingredient : [] }
          })
        }))
      .subscribe((recepies) => {
        this.recepieService.setRecepie(recepies)
      })
  }
}
