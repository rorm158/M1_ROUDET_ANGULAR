import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockageViewComponent } from './stockage-view.component';

describe('StockageViewComponent', () => {
  let component: StockageViewComponent;
  let fixture: ComponentFixture<StockageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
