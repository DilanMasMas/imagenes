import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagenme1Page } from './imagenme1.page';

describe('Imagenme1Page', () => {
  let component: Imagenme1Page;
  let fixture: ComponentFixture<Imagenme1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagenme1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagenme1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
