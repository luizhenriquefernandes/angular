import { ComponentFixture, TestBed } from '@angular/core/testing';

import { titleComponent } from './title.component';

describe('titleComponent', () => {
  let component: titleComponent;
  let fixture: ComponentFixture<titleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [titleComponent]
    });
    fixture = TestBed.createComponent(titleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
