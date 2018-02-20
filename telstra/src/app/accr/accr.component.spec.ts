import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccrComponent } from './accr.component';

describe('AccrComponent', () => {
  let component: AccrComponent;
  let fixture: ComponentFixture<AccrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
