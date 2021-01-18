/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Bc2Component } from './bc2.component';

describe('Bc2Component', () => {
  let component: Bc2Component;
  let fixture: ComponentFixture<Bc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
