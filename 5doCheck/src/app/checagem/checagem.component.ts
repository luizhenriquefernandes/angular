import { Component } from '@angular/core';

@Component({
  selector: 'app-checagem',
  templateUrl: './checagem.component.html',
  styleUrls: ['./checagem.component.scss']
})
export class checagemComponent {
  private a: Number = 0;
  
  get A():Number {
    return this.a;
  }


}
