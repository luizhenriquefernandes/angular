import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  helo = "Olá mundo! Seja Bem Vindo!!!";
  n1 = 15;
  n2 = 5;
  r = this.n1+this.n2;
}
