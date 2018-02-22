import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetrvwComponent } from './assetrvw.component';

describe('AssetrvwComponent', () => {
  let component: AssetrvwComponent;
  let fixture: ComponentFixture<AssetrvwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetrvwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetrvwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
