import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  fontSize: number = 15;
  textColor: 'white' | 'orange' = 'white'
  buttonText: 'Branco' | 'Laranja' = 'Laranja'
  styleString: string = 'font-size: 15px; color: white'

  increaseFontSize() {
    this.fontSize += 5

    this.styleString = `font-size: ${this.fontSize}px; color: ${this.textColor};`
  }

  toggleFontColor() {
    if(this.textColor === 'white') {
      this.textColor = 'orange'
      this.buttonText = 'Branco'
    } else {
      this.textColor = 'white'
      this.buttonText = 'Laranja'
    }

    this.styleString = `font-size: ${this.fontSize}px; color: ${this.textColor};`

  }
}
