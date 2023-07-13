import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public helo = "Olá Mundo Seja Bem Vindo";
  public vai = "Barracuda tá nadando";
  public n1 = 10;
  public n2 = 20;
  public r = this.n1+this.n2;
}
