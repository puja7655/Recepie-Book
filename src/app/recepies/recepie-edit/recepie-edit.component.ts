import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrl: './recepie-edit.component.css'
})
export class RecepieEditComponent implements OnInit {
  id: number
  editMode: boolean = false

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null
        }
      )
  }

}
