//app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';


const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: '', redirectTo: '/cliente', pathMatch: 'full' }, // Defina a rota para o ClienteComponent
  // Outras rotas podem ser adicionadas aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

/**app-routing.module.ts:

Este é o arquivo de configuração de rotas da sua aplicação.
Define a rota "cliente" que aponta para o componente ClienteComponent e 
uma rota padrão que redireciona para "cliente" quando a raiz é acessada.
Outras rotas podem ser adicionadas aqui conforme necessário. 

Este é o módulo do componente Cliente.
 Ele é responsável por declarar o componente, 
 importar o módulo ReactiveFormsModule para formulários reativos e configurar o módulo.
*/