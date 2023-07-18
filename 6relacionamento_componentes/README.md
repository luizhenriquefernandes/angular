# 6relacionamentoComponentes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

no arquivo
databinding.component.ts
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
para programagar as rotas e as interpolações
nestas aualas vimos como calcular a idade de um sujeito, lembrando que é ideal refinar o código para que a data seja do dia e do mês do nascimento.

no arquivo
databinding.component.htl

Aula 8
https://youtu.be/20KXBLkeVQ4

Aula 9
<h2>Aula 8: Two-way Biding</h2>
            <!-- fazendo um interpolation com dois binding -->
            <!-- ir na página: https://angular.io/api/forms/FormsModule 
                ir em app.module.ts e importar em imports FORMSMODULE
            após a implementação do ngModel é só chamar a variável e fazer
            a interpolação, dessa forma o two-way bidings é importante para 
            fazer os nomes serem vistos em tempo real-->
            <input [(ngModel)]="nome">
            {{nome}}


Aula 9 Diretivas
As diretivas são separadas de algumas formas, como:
Diretivas de atributo - alteram a aparência ou comportamento de um elemento, componente ou outra diretiva.
NgClass - aciona e remove um conunto de estilos CSS
ngStyle- aciona e remove um conunto de estilos HTML
ngModel - adiciona vinculação de dados bidirecional a um elmento de Formulário HTML
Diretivas estruturais - Moldam o remodelam a estrutura do DOM, adicionando, removendo e manipulando os elementos do host aos quais estão anexados.
NgIf - Condicionamente cria ou descarta visualizações do modelo
NgFor - Repete um nó para cada item de uma lista
NgSwitch - um conjunto de diretivas que alteranam entre visões alternativas.

trabalhando com NgIf
Em Angular, uma diretiva estrutural é um tipo de diretiva que adiciona, remove ou altera elementos no DOM. Diretivas estruturais são indicadas pelo prefixo `*` no nome da diretiva.

Por exemplo, a diretiva estrutural `*ngIf` adiciona um elemento ao DOM se uma determinada condição for atendida. A diretiva estrutural `*ngFor` repete um elemento no DOM um número definido de vezes.

Diretivas estruturais podem ser usadas para criar uma variedade de efeitos no DOM, incluindo:

* Adicionando ou removendo elementos
* Repetindo elementos
* Movendo elementos
* Alterando o conteúdo de elementos

Diretivas estruturais são uma ferramenta poderosa que pode ser usada para criar aplicativos da web dinâmicos e interativos.

A sintaxe de Schubert é um padrão de nomenclatura para componentes Angular que foi introduzido no Angular 14. Ele é projetado para tornar os componentes mais organizados e fáceis de entender.

A sintaxe de Schubert usa o seguinte formato para nomes de componentes:

```
[nome-do-módulo]-[nome-do-componente]
```

Por exemplo, se você tiver um módulo chamado `my-module` e um componente chamado `my-component`, o nome do componente de acordo com a sintaxe de Schubert seria `my-module-my-component`.

A sintaxe de Schubert é opcional, mas é recomendada para uso em novos projetos Angular. Ela pode ajudar a melhorar a legibilidade e a manutenção do seu código.

Aqui estão alguns benefícios de usar a sintaxe de Schubert:

* Melhor legibilidade: a sintaxe de Schubert é mais fácil de ler do que os nomes de componentes tradicionais. Isso ocorre porque ela usa um formato consistente e fácil de entender.
* Melhor manutenção: a sintaxe de Schubert pode ajudar a melhorar a manutenção do seu código. Isso ocorre porque ela torna mais fácil encontrar e identificar componentes.
* Compatibilidade com o Angular CLI: a sintaxe de Schubert é compatível com o Angular CLI. Isso significa que você pode usar o Angular CLI para criar e gerenciar componentes que usam a sintaxe de Schubert.

Se você estiver criando um novo projeto Angular, é recomendável usar a sintaxe de Schubert para nomes de componentes. Isso pode ajudar a melhorar a legibilidade, a manutenção e a compatibilidade do seu código.

Exercício AzulVermelho
Trabalhando com elseBlock
O `elseBlock` é um recurso útil para adicionar mais flexibilidade ao seu código Angular. Ele pode ser usado para exibir diferentes conteúdos dependendo do valor de uma condição.

Para aplicar o `elseBlock`, você precisa usar a diretiva `*ngIf` com o atributo `else`. O valor do atributo `else` deve ser o nome de um `ng-template`. O `ng-template` que você especifica no atributo `else` será exibido se a condição da diretiva `*ngIf` for falsa.

Aqui está um exemplo de como usar o `elseBlock` em Angular:

```
<div *ngIf="condition; else elseBlock">
  <h1>This will be displayed if condition is true.</h1>
</div>

<ng-template #elseBlock>
  <h1>This will be displayed if condition is false.</h1>
</ng-template>
```

Neste exemplo, o bloco `*ngIf` exibirá o conteúdo da tag `<h1>` se a condição `condition` for verdadeira. Se a condição `condition` for falsa, o bloco `elseBlock` exibirá o conteúdo da tag `<h1>`.

O `elseBlock` é um recurso útil para adicionar mais flexibilidade ao seu código Angular. Ele pode ser usado para exibir diferentes conteúdos dependendo do valor de uma condição.


Exercício fazando a janela mudar para lavanda e laranja a cada clique.
