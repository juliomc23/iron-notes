import { Component, WritableSignal, signal } from '@angular/core';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { Exercise } from '../workout/models/exercise.interface';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [FooterComponent,],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {

  wantToAddNewSerieToFill: WritableSignal<boolean> = signal(false);
  exerciseToAddNewSerieToFill: WritableSignal<string | null> = signal(null);
  exercises: WritableSignal<Omit<Exercise, 'weight' | 'rir'>[]> = signal([
    {
      name: 'Dominadas',
      series: 3,
      reps: 12,
    },
    {
      name: 'Jalon al pecho',
      series: 3,
      reps: 10
    }
  ])

  addSerieToFill(exerciseName: string) {
    this.wantToAddNewSerieToFill.set(true);
    this.exerciseToAddNewSerieToFill.set(exerciseName);
  }

  endSerieToFill() {
    this.wantToAddNewSerieToFill.set(false);
    this.exerciseToAddNewSerieToFill.set(null);
  }
}
