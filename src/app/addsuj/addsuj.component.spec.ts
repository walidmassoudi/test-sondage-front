import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsujComponent } from './addsuj.component';

describe('AddsujComponent', () => {
  let component: AddsujComponent;
  let fixture: ComponentFixture<AddsujComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsujComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
