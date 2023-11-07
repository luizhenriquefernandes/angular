//app.component.spec.ts
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

 

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Formularios app is running!');
  });
});
/**app.component.spec.ts:

Este é o arquivo de teste para o componente raiz (AppComponent).
Ele configura um ambiente de teste e verifica se o componente pode ser criado. 


Este é um arquivo de teste unitário para o componente raiz da aplicação. 
Ele testa se o componente raiz (AppComponent) é criado corretamente.

*/
