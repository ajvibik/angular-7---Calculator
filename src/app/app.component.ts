import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'calculator';
  total: string;
  totalValue: string;
  clear: boolean;
  history: boolean;
  historyList: any;
  historyValues: string;

   ngOnInit() {
    this.total = '';
    this.totalValue = '';
    this.clear = false;
    this.history = false;
    this.historyList = [];
    this.historyValues = '';
   }
backSpace() {
  this.total = this.total.substr(0, this.total.length - 1);
}
  equal() {
    this.total = eval(this.total.toString());
    }
    clearTotal() {
      this.historyList.push(this.totalValue.concat(' = ').concat(this.total));
      this.clear = true;
      this.total = '';
  }
  key(value) {
    if (this.clear == true) {
      this.total = '';
      this.total += value;
      this.clear = false;
    } else {
      this.total += value;
      this.clear = false;
      this.totalValue = this.total;
    }
    }

    historyShow() {
      this.history = !this.history;
    }
}
