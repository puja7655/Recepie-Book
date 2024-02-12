import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListComponentService {
  activeUserList=['max','ana'];
  inActiveUserList=['chris','manu'];

  constructor() { }

  setActive(id:number){
    this.activeUserList.push(this.inActiveUserList[id])
    this.inActiveUserList.splice(id,1)
  }
  setInActive(id:number){
    this.inActiveUserList.push(this.activeUserList[id]);
    this.activeUserList.splice(id,1)
  }
}

