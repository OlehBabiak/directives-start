import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4, 6, 9];

  highTextColor = 'white';
  highColor = 'blue';

  onlyOdd = false;

  colorChoice(color) {
    this.highTextColor = color;
  }

  bGColorChoice(color) {
    this.highColor = color;
  }
}
