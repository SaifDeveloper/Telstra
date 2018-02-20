import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetreviewComponent } from './assetreview.component';

describe('AssetreviewComponent', () => {
  let component: AssetreviewComponent;
  let fixture: ComponentFixture<AssetreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
