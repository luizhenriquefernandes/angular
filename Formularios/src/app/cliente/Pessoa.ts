//Pessoa.ts

export class Pessoa {
    private _nome: string;
    private _idade: number;
  
    constructor(nome: string, idade: number) {
      this._nome = nome;
      this._idade = idade;
    }
    get nome(): string {
        return this._nome;
      }
    
      get idade(): number {
        return this._idade;
      }
  }
  /**Pessoa.ts:

Este é um arquivo que define a classe Pessoa, com propriedades nome e idade.
Ele também define getters para acessar essas propriedades.


Este é o módulo de roteamento da aplicação. 
Ele define as rotas da aplicação, associando a rota 'cliente' ao componente ClienteComponent.*/