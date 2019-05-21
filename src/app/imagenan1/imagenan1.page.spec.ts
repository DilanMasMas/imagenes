import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagenan1Page } from './imagenan1.page';

describe('Imagenan1Page', () => {
  let component: Imagenan1Page;
  let fixture: ComponentFixture<Imagenan1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagenan1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagenan1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
