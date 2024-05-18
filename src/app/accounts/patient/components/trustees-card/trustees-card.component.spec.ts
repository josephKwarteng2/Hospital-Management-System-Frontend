import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrusteesCardComponent } from './trustees-card.component';

describe('TrusteesCardComponent', () => {
  let component: TrusteesCardComponent;
  let fixture: ComponentFixture<TrusteesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrusteesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrusteesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
