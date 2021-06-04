import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelugutophitsComponent } from './telugutophits.component';

describe('TelugutophitsComponent', () => {
  let component: TelugutophitsComponent;
  let fixture: ComponentFixture<TelugutophitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelugutophitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelugutophitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
