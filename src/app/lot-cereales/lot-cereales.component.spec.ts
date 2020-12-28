import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotCerealesComponent } from './lot-cereales.component';

describe('LotCerealesComponent', () => {
  let component: LotCerealesComponent;
  let fixture: ComponentFixture<LotCerealesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotCerealesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotCerealesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
