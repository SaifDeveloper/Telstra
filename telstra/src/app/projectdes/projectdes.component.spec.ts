import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdesComponent } from './projectdes.component';

describe('ProjectdesComponent', () => {
  let component: ProjectdesComponent;
  let fixture: ComponentFixture<ProjectdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
