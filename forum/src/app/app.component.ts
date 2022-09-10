import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<ul>
  <li *ngFor = "let data of myObjArray; let i= index ">number is : {{data.num}}
    name is : {{data.name}}
  </li>
  </ul>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forum';
  myObjArray = [{
    num: 1,
    name: 'Tom'
  },
  {
    num: 2,
    name: 'Debdita'
  },
  {
    num: 3,
    name: 'Bador'
  },
  {
    num: 4,
    name: 'Shreyan'
  },
  {
    num: 5,
    name: 'Saap'
  }];
}
