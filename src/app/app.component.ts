import { Component, NgZone } from '@angular/core';

import './../../litelement.umd.min';

let globalZone: NgZone = null;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private zone: NgZone) {
    globalZone = zone;
  }
  title = 'ng-test';

  testArraySimple = ['test', 'test', 'test'];
  testArray() {
    return ['test', 'test', 'test'].map((value) => {
      return {
        inner: value,
        prop1: value,
        prop2: value,
      }
    });
  }
}
