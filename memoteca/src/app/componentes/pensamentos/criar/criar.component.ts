import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit{
  pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',

  }
  constructor(){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.   
     
  }
  criarPensamento(){
    alert("Novo Pensamento Criado");
  }
}


