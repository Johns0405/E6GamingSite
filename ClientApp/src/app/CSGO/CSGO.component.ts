import { Component } from '@angular/core';

@Component({
  selector: 'CSGO',
  templateUrl: './CSGO.html',
  styleUrls: ['./CSGO.css']
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
