import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnallocatedContractComponent } from './unallocated-contract.component';

describe('UnallocatedContractComponent', () => {
  let component: UnallocatedContractComponent;
  let fixture: ComponentFixture<UnallocatedContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnallocatedContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnallocatedContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
