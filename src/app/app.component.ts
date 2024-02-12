import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
  loadedFeature: string = 'recepie';
  oddNumbers: number[] = []
  evenNumbers: number[] = []


  onNavigate(feature: string) {
    this.loadedFeature = feature
  }

  intervalValFired(firedVal: number) {
    console.log(firedVal)
    if (firedVal % 2 === 0) {
      this.evenNumbers.push(firedVal)
    } else {
      this.oddNumbers.push(firedVal)
    }
  }


}
