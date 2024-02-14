import { Component, OnInit, Input } from '@angular/core';
import { recepie } from '../../recepie.model';

@Component({
  selector: 'app-recepies-item',
  templateUrl: './recepies-item.component.html',
  styleUrl: './recepies-item.component.css'
})
export class RecepiesItemComponent implements OnInit {
  @Input()
  recepie!: recepie;
  @Input() index: number;
  constructor() { }
  ngOnInit(): void {

  }
}
