
//cliente.component.spect.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteComponent } from './cliente.component';

describe('ClienteComponent', () => {
  let component: ClienteComponent;
  let fixture: ComponentFixture<ClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteComponent]
    });
    fixture = TestBed.createComponent(ClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/*
cliente.component.spec.ts:

Este é o arquivo de teste para o componente ClienteComponent.
Ele configura um ambiente de teste e verifica se o componente pode ser criado com a 
função it('should create').


Este é um arquivo de teste unitário para o componente Cliente.
Os testes garantem que o componente seja criado corretamente e suas 
funcionalidades funcionem como esperado.

A função TestBed.configureTestingModule configura o ambiente de teste, incluindo a declaração do componente a ser testado.
O componente é criado usando TestBed.createComponent.
O teste it('should create') verifica se o componente foi criado com sucesso.
*/