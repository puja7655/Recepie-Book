import { Component, OnInit } from '@angular/core';
import { recepie } from '../recepie.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepies-detail',
  templateUrl: './recepies-detail.component.html',
  styleUrl: './recepies-detail.component.css'
})
export class RecepiesDetailComponent implements OnInit {
  recepie!: recepie
  id!: number;
  constructor(private shoppingListService: ShoppingListService,
    private recepieService: RecepieService,
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    /* 
    *we are trying to get the id from  url . we can do that by ActivatedRoute by taking a snapshot but that would only work when detail component is loaded other way is by
    * subscribing to that since id would be changing and it needs to be updated with the current one
    *params is an observable
    *we add the + sign to convert it into a number as the params which we would be getting is a string
    */
    this.route.params
      .subscribe(
        (param: Params) => {
          this.id = +param['id']
          this.recepie = this.recepieService.getRecepieByIndex(this.id)
        })
  }

  onEditRecepie() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    /*Here we are going one level up , then setting id in the Url and the adding edit but in the above way since 
      *we are already in details page id is already present in the usrl we just need to add edit in the url*/

    //this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})
  }

  onDeleteRecepie(){
   this.recepieService.deleteRecepie(this.id)
   this.router.navigate(['/recepies'])
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredientsToShoppingList(this.recepie.ingredient)
  }


}
