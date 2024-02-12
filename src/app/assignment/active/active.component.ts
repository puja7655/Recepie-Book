import { Component, OnInit } from '@angular/core';
import { ListComponentService } from '../services/list-component.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.css'
})
export class ActiveComponent implements OnInit {
  ActiveUserList: string[]
  constructor(private listComponentService: ListComponentService) { }
  ngOnInit(): void {
    this.ActiveUserList = this.listComponentService.activeUserList
  }

  setToInActiveList(id: number) {
    this.listComponentService.setInActive(id)
  }
}
