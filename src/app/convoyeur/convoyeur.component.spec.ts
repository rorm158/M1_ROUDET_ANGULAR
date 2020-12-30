import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvoyeurComponent } from './convoyeur.component';

describe('ConvoyeurComponent', () => {
  let component: ConvoyeurComponent;
  let fixture: ComponentFixture<ConvoyeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvoyeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvoyeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
