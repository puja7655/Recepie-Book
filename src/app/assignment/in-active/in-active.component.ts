import { Component, OnInit } from '@angular/core';
import { ListComponentService } from '../services/list-component.service';

@Component({
  selector: 'app-in-active',
  templateUrl: './in-active.component.html',
  styleUrl: './in-active.component.css'
})
export class InActiveComponent implements OnInit {
  inActiveUser: string[];

  constructor(private listComponentService: ListComponentService) { }

  ngOnInit(): void {
    this.inActiveUser = this.listComponentService.inActiveUserList
    console.log(this.inActiveUser)
  }

  setToActiveList(id: number) {
    this.listComponentService.setActive(id)
  }
}
