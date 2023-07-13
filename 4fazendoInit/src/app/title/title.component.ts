import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-title',
  
  templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})
export class titleComponent implements OnInit, OnChanges{
  public tite: string = "";
  public n1 = 10;
  public n2 = 5;
  public r = this.n1 + this.n2;  
  constructor(){
  }
  public/**digitado publico */ ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the  console.log("Não quiz saber");
    //Esta função permite que a mensagem seja exibida 5 segundos após sua inicialização
    //    
    setTimeout(() => this.tite="Porque o Gutz gosta da Kaska??",5000);
  }
  public ngOnChanges(changes: SimpleChanges): void {
    document.write("Tema alterado com sucesso");
  }
}
/**
 * O `setTimeout` é uma função do JavaScript que permite atrasar a execução de uma determinada ação por 
 * um período de tempo definido em milissegundos. É comumente usado para adicionar atrasos em animações, 
 * carregamento de conteúdo e outras operações assíncronas.
Por exemplo, se você quiser que uma mensagem apareça na tela após 5 segundos, você pode usar o seguinte 
código:
setTimeout(function() {
  alert("Olá, mundo!");
}, 5000);
Isso significa que o código dentro da função será executado após um atraso de 5 segundos (ou 5000 
  milissegundos).
Lembre-se que o `setTimeout` não é preciso em relação ao tempo, pois depende do tempo de processamento 
do computador e outros fatores externos. Portanto, é importante ter isso em mente ao usá-lo em seu código.
Suponha que você tenha uma aplicação de to-do list e queira adicionar uma funcionalidade para exibir uma 
mensagem de lembrete após um determinado período de tempo. Você pode usar o `setTimeout` para agendar 
essa exibição.
javascript
function adicionarLembrete(tarefa, tempo) {
  setTimeout(function() {
    console.log(`Lembrete: Não se esqueça de ${tarefa}!`);
  }, tempo);
}
adicionarLembrete("comprar leite", 5000); // Exibirá o lembrete após 5 segundos
adicionarLembrete("fazer exercícios", 10000); // Exibirá o lembrete após 10 segundos
Dessa forma, após o tempo definido, a mensagem de lembrete será exibida no console do navegador ou no 
console do Node.js, caso esteja executando no ambiente de servidor. Você pode adaptar esse exemplo para 
exibir a mensagem na interface do usuário da sua aplicação.
 */