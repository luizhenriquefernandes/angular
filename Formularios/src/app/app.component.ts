//app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  // Método para navegar para o ClienteComponent
  navegarParaCliente() {
    this.router.navigate(['/cliente']);
  }
}
/**app.component.ts:

Este é o arquivo TypeScript do componente raiz (AppComponent).
Ele importa o Router para navegar entre as rotas.
O método navegarParaCliente() permite navegar para a rota "cliente" 
quando o botão é clicado.

Este é o código do componente raiz da aplicação (AppComponent). 
Ele importa o Router para permitir a navegação.

O método navegarParaCliente() é chamado para navegar para a rota "cliente" quando o link é clicado.

*/