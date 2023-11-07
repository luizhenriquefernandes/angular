//cliente.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Pessoa} from "./Pessoa";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  pessoaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.pessoaForm = this.formBuilder.group({
      nome: ['', Validators.required],
      idade: [0, Validators.required],
    });
  }
  ngOnInit() {
    // Navegar para a rota "cliente" assim que o componente for carregado
    this.router.navigate(['/cliente']);
  }
  navegarParaCliente() {
  this.router.navigate(['/cliente']);
}
  

  salvarPessoa() {
    if (this.pessoaForm && this.pessoaForm.valid) {
      const nomeControl = this.pessoaForm.get('nome');
      const idadeControl = this.pessoaForm.get('idade');
  
      if (nomeControl && idadeControl) {
        const nome = nomeControl.value;
        const idade = idadeControl.value;
  
        const novaPessoa = new Pessoa(nome, idade);
        console.log('Nova Pessoa:', novaPessoa);
      }
    }
  }
}
/**cliente.component.ts:

Este é o arquivo TypeScript para o componente ClienteComponent.
Ele importa as dependências necessárias, como Component, FormGroup, FormBuilder, Validators, Pessoa e Router.
O componente é decorado com metadados, como o seletor (selector) e os arquivos de template e estilo.
No construtor, o FormGroup chamado pessoaForm é criado com dois campos, nome e idade, com validadores.
O método ngOnInit é usado para navegar automaticamente para a rota "cliente" assim que o componente é carregado.
O método navegarParaCliente() permite navegar para a rota "cliente" programaticamente.
A função salvarPessoa() é chamada quando o formulário é enviado e cria uma nova instância de Pessoa e a exibe no console.

Este é o código do componente Cliente. O componente é uma classe TypeScript que define a lógica do componente.

FormGroup e FormBuilder são importados para criar e gerenciar um formulário reativo.
Pessoa é importado para criar uma instância de Pessoa.
Router é importado para navegar para outras rotas.
No construtor, o FormGroup pessoaForm é criado usando o FormBuilder. Ele contém os campos nome e idade.

No método ngOnInit(), o componente navega automaticamente para a rota "cliente" quando é carregado.

O método salvarPessoa() é chamado quando o formulário é submetido. 
Ele valida o formulário e cria uma nova instância de Pessoa com os dados inseridos.
 * 
 */