//cliente.module.ts
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteComponent } from './cliente.component';

@NgModule({
  declarations: [ClienteComponent],
  imports: [ReactiveFormsModule],
})
export class ClienteModule { }
/**cliente.module.ts:

Este é o módulo do cliente, onde o ClienteComponent é declarado.
Ele também importa ReactiveFormsModule para habilitar recursos de formulários reativos. 


Este é o módulo do componente Cliente. 
Ele é responsável por declarar o componente, importar o módulo 
ReactiveFormsModule para formulários reativos e configurar o módulo.

*/
