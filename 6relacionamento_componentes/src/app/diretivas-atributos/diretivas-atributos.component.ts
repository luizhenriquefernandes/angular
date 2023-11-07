import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit{
  //aula 14 ng class
  public valor: boolean = true;
  //aula 15 ng style
  public heightPx: string = "20px";
  //faça o método set interval para mudar a o valor de pixels
  public backgroundC: string = "violet";

  //aula 14 ng class
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //sitaxe do set interval: setInterval(()=>{},valordointervalo);
    //aula 14
    setInterval(()=>{
      if(this.valor){
        this.valor = false;
      }else{
        this.valor = true;
      }
  },2000);
  //aula 15
  setInterval(()=>{
    if(this.heightPx == "20px"){
      this.heightPx = "50px";
      this.backgroundC = "orange";
    }else{
      this.heightPx = "20px";
      this.backgroundC = "violet";
    }
  },2000);
  //Aula 16 ngModel agora já iremos trabalhar com variáveis privadas  
  }
  private _nome: string = "";
  get nome(): string{
    return this._nome;
  }
  set nome(novoNome: string){
    this._nome = novoNome;
  }
 public items: Array<{nome: string}> = [];
 public salvar(){
  this.items.push({nome: this._nome});
  //para apagar o nome da caixa de texto
  this.nome = "";
 }
 // Aula 17 Fazendo o temaplate funcionar com ng for e ng if
 private _nomeTemplate: string = "";
 get nomeTemplate(): string{
  return this._nomeTemplate;
 }
 set nomeTemplate(novoNome: string){
  this._nomeTemplate = novoNome;
 }
 public itemTemplate: Array<{nomeTemplate: string}> = [];
 public salvarTemplate(){
  this.itemTemplate.push({nomeTemplate: this._nomeTemplate});
  //apagando o nome da caixa de texto
  this.nomeTemplate = "";  
 }
 // aula 19 fazendo o pipe
 public date: Date = new Date();
}
