import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrl: './recepie-edit.component.css'
})
export class RecepieEditComponent implements OnInit {
  id!: number
  editMode: boolean = false
  recepieForm!: FormGroup

  constructor(private route: ActivatedRoute,
    private recepieService: RecepieService) { }
  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm()
        }
      )
  }

  initForm() {
    let recpieName = ''
    let recepieDescription = ''
    let recepieImgPath = ''
    //let recepieIngredient = new FormArray([])
    let recepieIngredient:any = new FormArray([])
    if (this.editMode) {
      const recepie = this.recepieService.getRecepieByIndex(this.id)
      console.log("recepie", recepie)
      recpieName = recepie.name;
      recepieDescription = recepie.description;
      recepieImgPath = recepie.imgPath
      if (recepie['ingredient']) {
        for (let ingredient of recepie.ingredient) {
          recepieIngredient.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            }))
        }
      }
      console.log("recepieIngredient", recepieIngredient)
    }
    this.recepieForm = new FormGroup({
      'name': new FormControl(recpieName, Validators.required),
      'imgPath': new FormControl(recepieImgPath, Validators.required),
      'description': new FormControl(recepieDescription, Validators.required),
      'ingredients': recepieIngredient
    })
  }

  addNewIngredient() {
    (<FormArray>this.recepieForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  get controls() { // a getter!
    return (<FormArray>this.recepieForm.get('ingredients')).controls;
  }

  onSubmit() {
    console.log(this.recepieForm)
  }

}
