import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { clearInterval } from 'timers';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit {

  intervalId: string | number | NodeJS.Timeout | undefined
  @Output() intervalFired = new EventEmitter<number>()
  lastNumber: any = 0;
  constructor() { }

  ngOnInit(): void {

  }
  onStartGame() {
    this.intervalId = setInterval(() => {
      this.intervalFired.emit(this.lastNumber+1)
      this.lastNumber++;
    }, 1000)

  }
  onPauseGame() {
    clearInterval(this.intervalId)
  }
}
