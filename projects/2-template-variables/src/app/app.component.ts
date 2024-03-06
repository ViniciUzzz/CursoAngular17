import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TesteService } from './services/teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //appBgColor = 'pink'
  // @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>

  constructor(private readonly _elRef: ElementRef, private readonly _testeService: TesteService) { }

  // ngOnInit() {
  //   console.log(this._elRef)
  //   const divEl = this._elRef.nativeElement.querySelector('#minha-outra-div') as HTMLDivElement

  //   divEl.textContent = 'Sou uma outra div!'
  //   divEl.style.backgroundColor = 'green'
  //   divEl.style.color = 'white'

  //   divEl.addEventListener('click', () => {
  //     console.log('Clicou na div!')
  //   })

  //   console.log(divEl)
  // }

  // ngAfterViewInit() {
  //   this.divEl.nativeElement.style.backgroundColor = 'orange'
  //   this.divEl.nativeElement.textContent = 'Sou uma div!'
  //   this.divEl.nativeElement.classList.add('minha-classe')  
  // }

  // createElement() {
  //   const novaDiv = document.createElement('div')

  //   novaDiv.textContent = 'Sou uma nova div!'
  //   novaDiv.classList.add('bg-red')

  //   this._elRef.nativeElement.appendChild(novaDiv)
  // }
  createElement() {
    this._testeService.create(this._elRef)
  }

}
