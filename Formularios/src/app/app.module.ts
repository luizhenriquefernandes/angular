//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module'; // Importe o ClienteModule

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ClienteModule], // Adicione o ClienteModule aqui
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/**app.module.ts:

Este é o módulo raiz da aplicação.
Ele importa AppRoutingModule para configurar o roteamento.
Também importa ClienteModule, que contém o componente ClienteComponent.
ClienteModule é adicionado aos imports para tornar o ClienteComponent disponível na aplicação.


Este é o módulo raiz da aplicação. Ele declara o componente raiz (AppComponent) 
e importa o ClienteModule para que o componente Cliente seja acessível em toda a aplicação.

*/