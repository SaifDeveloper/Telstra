import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetreviewxComponent } from './assetreviewx.component';

describe('AssetreviewxComponent', () => {
  let component: AssetreviewxComponent;
  let fixture: ComponentFixture<AssetreviewxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetreviewxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetreviewxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
