import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagenmu1Page } from './imagenmu1.page';

describe('Imagenmu1Page', () => {
  let component: Imagenmu1Page;
  let fixture: ComponentFixture<Imagenmu1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagenmu1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagenmu1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
