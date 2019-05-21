import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagena1Page } from './imagena1.page';

describe('Imagena1Page', () => {
  let component: Imagena1Page;
  let fixture: ComponentFixture<Imagena1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagena1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagena1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
