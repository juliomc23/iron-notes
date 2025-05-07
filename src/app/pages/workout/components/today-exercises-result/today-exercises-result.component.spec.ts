import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayExercisesResultComponent } from './today-exercises-result.component';

describe('TodayExercisesResultComponent', () => {
  let component: TodayExercisesResultComponent;
  let fixture: ComponentFixture<TodayExercisesResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayExercisesResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodayExercisesResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
