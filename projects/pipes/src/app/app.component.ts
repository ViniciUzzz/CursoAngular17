import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pessoa = {
    name: 'Vinícius',
    status: 1
  }
  pessoa2 = {
    name: 'Laura',
    status: 2
  }
  pessoa3 = {
    name: 'Arthur',
    status: 3
  }
}
