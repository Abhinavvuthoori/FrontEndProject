import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishhitsComponent } from './englishhits.component';

describe('EnglishhitsComponent', () => {
  let component: EnglishhitsComponent;
  let fixture: ComponentFixture<EnglishhitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishhitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishhitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
