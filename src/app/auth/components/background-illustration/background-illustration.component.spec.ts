import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundIllustrationComponent } from './background-illustration.component';

describe('BackgroundIllustrationComponent', () => {
  let component: BackgroundIllustrationComponent;
  let fixture: ComponentFixture<BackgroundIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundIllustrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
