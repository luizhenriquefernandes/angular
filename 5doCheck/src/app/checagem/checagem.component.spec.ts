import { ComponentFixture, TestBed } from '@angular/core/testing';

import { checagemComponent } from './checagem.component';

describe('checagemComponent', () => {
  let component: checagemComponent;
  let fixture: ComponentFixture<checagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [checagemComponent]
    });
    fixture = TestBed.createComponent(checagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
