import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  personSelectedIndex: number | undefined

  listPeople = [
    {name: 'Vinícius Reinehr', age: 24},
    {name: 'Laura de Figueiredo', age: 22},
    {name: 'Cassiano Dietrich', age: 9},
    {name: 'Regina M Dietrich', age: 75}
  ]

  selectPerson(index: number) {
    console.log(index + 1);

    this.personSelectedIndex = index
  }
}
