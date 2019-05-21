import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagende1Page } from './imagende1.page';

describe('Imagende1Page', () => {
  let component: Imagende1Page;
  let fixture: ComponentFixture<Imagende1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagende1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagende1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
