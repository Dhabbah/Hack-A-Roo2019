import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsPage } from './academics.page';

describe('AcademicsPage', () => {
  let component: AcademicsPage;
  let fixture: ComponentFixture<AcademicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
