import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTrainComponent } from './today-train.component';

describe('TodayTrainComponent', () => {
  let component: TodayTrainComponent;
  let fixture: ComponentFixture<TodayTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayTrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodayTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
