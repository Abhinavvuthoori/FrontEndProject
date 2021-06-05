import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindihitsComponent } from './hindihits.component';

describe('HindihitsComponent', () => {
  let component: HindihitsComponent;
  let fixture: ComponentFixture<HindihitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HindihitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HindihitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
