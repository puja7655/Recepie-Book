import { Component, OnInit } from '@angular/core';
import { recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrl: './recepies-list.component.css'
})
export class RecepiesListComponent implements OnInit {
  recepies: recepie[] = [];
  individualRecepie!: recepie;
  constructor(private recepieService: RecepieService) {

  }
  ngOnInit(): void {
    this.recepies = this.recepieService.getRecepie()
  }
}
