import { Component, OnInit } from '@angular/core';
import { recepie } from './recepie.model';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrl: './recepies.component.css'
})
export class RecepiesComponent implements OnInit{
  selectedRecepie:recepie
  
  constructor( private recepieService:RecepieService){}

  ngOnInit(): void {
    this.recepieService.recepieSelectd
    .subscribe(
      (recepie:recepie)=>{
        this.selectedRecepie=recepie;
      })
  }
}
