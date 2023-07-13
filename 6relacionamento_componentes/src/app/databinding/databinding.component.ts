import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent {
  /**É muito importante tipar a variável por boas práticas de código */
  nome: string = "Luís";
  anoDeNascimento: number = 2001;
  /**cria uma variável e inclua a data e get full year e você poderá ser feliz]
   * E calcular a idade.
   */
  data = new Date().getFullYear();
  idade: number = this.data - this.anoDeNascimento;
  /**Este passo é foi criado um botão para deixar visível,
   * contudo se inserir true ele deixa o botão hidden.
  */
  public checkoutDisable: boolean = false;
  public alertaInfo(){
    alert("Goku é Melhor que Naruto");
  }

}
