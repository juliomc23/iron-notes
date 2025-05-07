import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastExercisesResultComponent } from './last-exercises-result.component';

describe('LastExercisesResultComponent', () => {
  let component: LastExercisesResultComponent;
  let fixture: ComponentFixture<LastExercisesResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastExercisesResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastExercisesResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
