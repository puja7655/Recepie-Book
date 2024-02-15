import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
  oddNumbers: number[] = []
  evenNumbers: number[] = []

  intervalValFired(firedVal: number) {
    console.log(firedVal)
    if (firedVal % 2 === 0) {
      this.evenNumbers.push(firedVal)
    } else {
      this.oddNumbers.push(firedVal)
    }
  }


}
