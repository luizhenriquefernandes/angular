import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {
 public condition: boolean = true;
 //criando uma condição
 //Exercício azul vermelho
 public azulVermelho: boolean = true;
 //criando a variável laranjaLavandaClique
 public laranjaLavandaClique: boolean = true;
 // Exercício 11 Ng*for
 public list: Array<{nome: string}> = [
  {nome:"SalciFufu é Malucu"},
  {nome:"The Witcher is the best of bests"},
  {nome:"Não queria me chamar Mytrandir"},
  {nome:"Não conheci o outro mundo por querer"}
]
/**um exemplo de como usar a diretiva *ngFor em Angular. 
 * ]A diretiva *ngFor é usada para repetir um elemento no 
 * DOM um número definido de vezes. No seu exemplo, a 
 * diretiva *ngFor está repetindo o elemento <li> um 
 * número definido de vezes, com base no comprimento da 
 * matriz list.

O atributo let na diretiva *ngFor cria uma variável local 
chamada item. A variável item é vinculada a cada elemento 
da matriz list. O atributo of na diretiva *ngFor especifica 
a matriz que será iterada.

O conteúdo do elemento <li> é o valor da propriedade nome 
do objeto item. A propriedade nome é um atributo do objeto 
item que contém o nome de um item na matriz list.

O código que você forneceu exibirá uma lista de todos os 
nomes na matriz list. Por exemplo, se a matriz list contiver 
os seguintes itens:

['item1', 'item2', 'item3'] */

public list1: Array<{item: string, preco: number}> = [
  {item:"Sabonete de Pó de Mico",preco: 22.50},
  {item:"Gandalf sem Cajado",preco: 12.90},
  {item:"Anel de namoro engana com gps(sem)",preco: 1399.99},
];

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  setInterval(()=>{
    if(this.condition){
         this.condition = false;
    }else{
      this.condition = true;
    }
  },2000)
  // a cada 2 segundos a página ficará atualizando entre visível e invisível
  /**Exercício fazer um condition que faça ficar alternando
   * entre azul e vermelho com o elseblock
   */
  setInterval(()=>{
    if(this.azulVermelho){
      this.azulVermelho = false;
    }else{
      this.azulVermelho = true;
    }
    
  },2000)
    
 }
 /**Exercício fazer um condition que faça ficar alternando
   * entre lavanda e laranja a cada clique
   * Driando o envento onClick
   */
 public onClick(){
  if(this.laranjaLavandaClique){
    this.laranjaLavandaClique = false;
  }else{
    this.laranjaLavandaClique = true;
  }
 }
 /**13 fazendo uma lista com push e splice */
 public onClickEventList(event:number){
  this.list1.splice(event,1);

 }
 public onClickAddList(){
  this.list1.push({item:"zoro",preco:222.90});
 }
}
