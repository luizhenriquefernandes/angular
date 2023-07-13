import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent {
  //Aula 6
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
 /**Aula 7 Criando botões */
  public checkoutDisable: boolean = false;
  //criando botão que faz um alert
  public alertaInfo(){
    alert("Goku é Melhor que Naruto");
  }
  /**Aula 8 criando botão e criando evento
   * 
  */
 public alertaClica(valor: MouseEvent){
  alert("Aula 8 em execução"+ valor);  
 }

 public position:{x: number, y: number}={x:0, y:0}
 public moveMouse(valor: MouseEvent){
  this.position.x = valor.offsetX;
  this.position.y = valor.offsetY;
 }
 

}
