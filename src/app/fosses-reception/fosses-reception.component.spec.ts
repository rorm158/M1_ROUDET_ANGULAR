import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FossesReceptionComponent } from './fosses-reception.component';

describe('FossesReceptionComponent', () => {
  let component: FossesReceptionComponent;
  let fixture: ComponentFixture<FossesReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FossesReceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FossesReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
