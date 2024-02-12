import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit {

  name: string = ""
  displayParagraph = false;
  arr: any = [];
  count = 0;
  constructor() { }

  ngOnInit() {
  }

  onClickButton() {
    this.displayParagraph = !this.displayParagraph
    //this.name=""
     this.arr.push(new Date().getTime())
    //this.arr.push(this.count++)
  }

  getColor() {
    return this.count > 5 ? 'blue' : 'transparent';
  }
}

