import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {
  propTest: boolean = false

  @Input({ transform: booleanAttribute }) buttonDisabled: boolean = false

  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();
  onButtonClick() {
    console.log('OnButtonClick');

    this.buttonClickEmitter.emit(this.propTest);
  }
}
