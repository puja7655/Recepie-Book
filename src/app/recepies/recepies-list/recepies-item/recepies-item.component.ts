import { Component, OnInit, Input} from '@angular/core';
import { recepie } from '../../recepie.model';
import { RecepieService } from '../../recepie.service';

@Component({
  selector: 'app-recepies-item',
  templateUrl: './recepies-item.component.html',
  styleUrl: './recepies-item.component.css'
})
export class RecepiesItemComponent implements OnInit {
  @Input()
  recepie!: recepie;
  constructor(private recepieService:RecepieService) { }
  ngOnInit(): void {

  }

  onSelected() {
    this.recepieService.recepieSelectd.emit(this.recepie)
  }

}
